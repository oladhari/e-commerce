from django_countries.serializer_fields import CountryField
from rest_framework import serializers

from market.models import Address
from market.models import Category
from market.models import Coupon
from market.models import Item
from market.models import Order
from market.models import OrderItem
from market.models import Payment


class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value


class CouponSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coupon
        fields = ("id", "code", "amount")


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ("id", "title")
        extra_kwargs = {"categories": {"required": False}}


class ItemSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = Item
        fields = (
            "id",
            "title",
            "price",
            "discount_price",
            "slug",
            "description",
            "image",
            "categories",
        )
        extra_kwargs = {"categories": {"required": False}}


class OrderItemSerializer(serializers.ModelSerializer):
    item = serializers.SerializerMethodField()
    final_price = serializers.SerializerMethodField()

    class Meta:
        model = OrderItem
        fields = ("id", "item", "quantity", "final_price")

    def get_item(self, obj):
        return ItemSerializer(obj.item).data

    def get_final_price(self, obj):
        return obj.get_final_price()


class OrderSerializer(serializers.ModelSerializer):
    order_items = serializers.SerializerMethodField()
    total = serializers.SerializerMethodField()
    coupon = serializers.SerializerMethodField()

    class Meta:
        model = Order
        fields = ("id", "order_items", "total", "coupon")

    def get_order_items(self, obj):
        return OrderItemSerializer(obj.items(), many=True).data

    def get_total(self, obj):
        return obj.get_total()

    def get_coupon(self, obj):
        if obj.coupon is not None:
            return CouponSerializer(obj.coupon).data
        return None


class ItemDetailSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = Item
        fields = (
            "id",
            "title",
            "price",
            "discount_price",
            "slug",
            "description",
            "image",
            "categories",
        )
        extra_kwargs = {"categories": {"required": False}}


class CategoryDetailSerializer(serializers.ModelSerializer):
    category = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ("id", "title")


class AddressSerializer(serializers.ModelSerializer):
    country = CountryField()

    class Meta:
        model = Address
        fields = (
            "id",
            "user",
            "street_address",
            "apartment_address",
            "country",
            "zip",
            "address_type",
            "default",
        )


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ("id", "amount", "timestamp")
