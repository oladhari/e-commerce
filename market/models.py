from django.db.models.signals import post_save
from django.conf import settings
from django.db import models
from django.db.models import Sum
from django.shortcuts import reverse
from django_countries.fields import CountryField
from django.utils.translation import gettext_lazy as _


CLOTHES_SIZES = (
    ("S", "small"),
    ("M", "Medium"),
    ("L", "Large"),
    ("LL", "double large"),
    ("XL", "extra large"),
    ("XXL", "extra extra large"),
)

ADDRESS_CHOICES = (
    ("B", "Billing"),
    ("S", "Shipping"),
)


class UserProfile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, verbose_name=_("user")
    )
    stripe_customer_id = models.CharField(
        max_length=50, blank=True, null=True, verbose_name=_("stripe_customer_id")
    )
    one_click_purchasing = models.BooleanField(
        default=False, verbose_name=_("one_click_purchasing")
    )

    def __str__(self):
        return self.user.username


class Category(models.Model):
    title = models.CharField(max_length=100, verbose_name=_("title"))

    def __str__(self):
        return self.title


class Item(models.Model):
    title = models.CharField(max_length=100, verbose_name=_("title"))
    price = models.FloatField(verbose_name=_("price"))
    clothes_size = models.CharField(
        choices=CLOTHES_SIZES,
        blank=True,
        null=True,
        max_length=3,
        verbose_name=_("clothes size"),
    )
    shoes_size = models.DecimalField(
        max_digits=3,
        decimal_places=1,
        blank=True,
        null=True,
        verbose_name=_("shoes size"),
    )
    discount_price = models.FloatField(
        blank=True, null=True, verbose_name=_("discount price")
    )
    category = models.ForeignKey(
        "Category", on_delete=models.CASCADE, verbose_name=_("category")
    )
    slug = models.SlugField(verbose_name=_("slug"))
    description = models.TextField(verbose_name=_("description"))
    image = models.ImageField(verbose_name=_("image"))

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("core:product", kwargs={"slug": self.slug})

    def get_add_to_cart_url(self):
        return reverse("core:add-to-cart", kwargs={"slug": self.slug})

    def get_remove_from_cart_url(self):
        return reverse("core:remove-from-cart", kwargs={"slug": self.slug})


class OrderItem(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, verbose_name=_("user")
    )
    ordered = models.BooleanField(default=False, verbose_name=_("ordered"))
    item = models.ForeignKey(Item, on_delete=models.CASCADE, verbose_name=_("item"))
    quantity = models.IntegerField(default=1, verbose_name=_("quantity"))

    def __str__(self):
        return f"{self.quantity} of {self.item.title}"

    def get_total_item_price(self):
        return self.quantity * self.item.price

    def get_total_discount_item_price(self):
        return self.quantity * self.item.discount_price

    def get_amount_saved(self):
        return self.get_total_item_price() - self.get_total_discount_item_price()

    def get_final_price(self):
        if self.item.discount_price:
            return self.get_total_discount_item_price()
        return self.get_total_item_price()


class Order(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, verbose_name=_("user")
    )
    ref_code = models.CharField(
        max_length=20, blank=True, null=True, verbose_name=_("reference code")
    )
    items = models.ManyToManyField(OrderItem)
    start_date = models.DateTimeField(auto_now_add=True, verbose_name=_("start date"))
    ordered_date = models.DateTimeField(verbose_name=_("ordered date"))
    ordered = models.BooleanField(default=False, verbose_name=_("ordered"))
    shipping_address = models.ForeignKey(
        "Address",
        related_name="shipping_address",
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        verbose_name=_("shipping address"),
    )
    billing_address = models.ForeignKey(
        "Address",
        related_name="billing_address",
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        verbose_name=_("billing address"),
    )
    payment = models.ForeignKey(
        "Payment",
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        verbose_name=_("payment"),
    )
    coupon = models.ForeignKey(
        "Coupon",
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        verbose_name=_("coupon"),
    )
    being_delivered = models.BooleanField(
        default=False, verbose_name=_("being delivered")
    )
    received = models.BooleanField(default=False, verbose_name=_("received"))
    refund_requested = models.BooleanField(
        default=False, verbose_name=_("refund requested")
    )
    refund_granted = models.BooleanField(
        default=False, verbose_name=_("refund granted")
    )

    """
    1. Item added to cart
    2. Adding a billing address
    (Failed checkout)
    3. Payment
    (Preprocessing, processing, packaging etc.)
    4. Being delivered
    5. Received
    6. Refunds
    """

    def __str__(self):
        return self.user.username

    def get_total(self):
        total = 0
        for order_item in self.items.all():
            total += order_item.get_final_price()
        if self.coupon:
            total -= self.coupon.amount
        return total


class Address(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, verbose_name=_("user")
    )
    street_address = models.CharField(max_length=100, verbose_name=_("street address"))
    apartment_address = models.CharField(
        max_length=100, verbose_name=_("apartment address")
    )
    country = CountryField(multiple=False, verbose_name=_("country"))
    zip = models.CharField(max_length=100, verbose_name=_("zip code"))
    address_type = models.CharField(
        max_length=1, choices=ADDRESS_CHOICES, verbose_name=_("address type")
    )
    default = models.BooleanField(default=False, verbose_name=_("default"))

    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name_plural = "Addresses"


class Payment(models.Model):
    stripe_charge_id = models.CharField(
        max_length=50, verbose_name=_("stripe charge id")
    )
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        verbose_name=_("user"),
    )
    amount = models.FloatField(verbose_name=_("amount"))
    timestamp = models.DateTimeField(auto_now_add=True, verbose_name=_("timestamp"))

    def __str__(self):
        return self.user.username


class Coupon(models.Model):
    code = models.CharField(max_length=15, verbose_name=_("code"))
    amount = models.FloatField(verbose_name=_("amount"))

    def __str__(self):
        return self.code


class Refund(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, verbose_name=_("order"))
    reason = models.TextField(verbose_name=_("reason"))
    accepted = models.BooleanField(default=False, verbose_name=_("accepted"))
    email = models.EmailField(verbose_name=_("email"))

    def __str__(self):
        return f"{self.pk}"


def userprofile_receiver(sender, instance, created, *args, **kwargs):
    if created:
        userprofile = UserProfile.objects.create(user=instance)


post_save.connect(userprofile_receiver, sender=settings.AUTH_USER_MODEL)
