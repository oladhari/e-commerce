# Generated by Django 3.2.5 on 2021-07-14 13:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django_countries.fields


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("market", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="address",
            name="address_type",
            field=models.CharField(
                choices=[("B", "Billing"), ("S", "Shipping")],
                max_length=1,
                verbose_name="address type",
            ),
        ),
        migrations.AlterField(
            model_name="address",
            name="apartment_address",
            field=models.CharField(max_length=100, verbose_name="apartment address"),
        ),
        migrations.AlterField(
            model_name="address",
            name="country",
            field=django_countries.fields.CountryField(
                max_length=2, verbose_name="country"
            ),
        ),
        migrations.AlterField(
            model_name="address",
            name="default",
            field=models.BooleanField(default=False, verbose_name="default"),
        ),
        migrations.AlterField(
            model_name="address",
            name="street_address",
            field=models.CharField(max_length=100, verbose_name="street address"),
        ),
        migrations.AlterField(
            model_name="address",
            name="user",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                to=settings.AUTH_USER_MODEL,
                verbose_name="user",
            ),
        ),
        migrations.AlterField(
            model_name="address",
            name="zip",
            field=models.CharField(max_length=100, verbose_name="zip code"),
        ),
        migrations.AlterField(
            model_name="coupon",
            name="amount",
            field=models.FloatField(verbose_name="amount"),
        ),
        migrations.AlterField(
            model_name="coupon",
            name="code",
            field=models.CharField(max_length=15, verbose_name="code"),
        ),
        migrations.AlterField(
            model_name="order",
            name="being_delivered",
            field=models.BooleanField(default=False, verbose_name="being delivered"),
        ),
        migrations.AlterField(
            model_name="order",
            name="billing_address",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="billing_address",
                to="market.address",
                verbose_name="billing address",
            ),
        ),
        migrations.AlterField(
            model_name="order",
            name="coupon",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                to="market.coupon",
                verbose_name="coupon",
            ),
        ),
        migrations.AlterField(
            model_name="order",
            name="ordered",
            field=models.BooleanField(default=False, verbose_name="ordered"),
        ),
        migrations.AlterField(
            model_name="order",
            name="ordered_date",
            field=models.DateTimeField(verbose_name="ordered date"),
        ),
        migrations.AlterField(
            model_name="order",
            name="payment",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                to="market.payment",
                verbose_name="payment",
            ),
        ),
        migrations.AlterField(
            model_name="order",
            name="received",
            field=models.BooleanField(default=False, verbose_name="received"),
        ),
        migrations.AlterField(
            model_name="order",
            name="ref_code",
            field=models.CharField(
                blank=True, max_length=20, null=True, verbose_name="reference code"
            ),
        ),
        migrations.AlterField(
            model_name="order",
            name="refund_granted",
            field=models.BooleanField(default=False, verbose_name="refund granted"),
        ),
        migrations.AlterField(
            model_name="order",
            name="refund_requested",
            field=models.BooleanField(default=False, verbose_name="refund requested"),
        ),
        migrations.AlterField(
            model_name="order",
            name="shipping_address",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="shipping_address",
                to="market.address",
                verbose_name="shipping address",
            ),
        ),
        migrations.AlterField(
            model_name="order",
            name="start_date",
            field=models.DateTimeField(auto_now_add=True, verbose_name="start date"),
        ),
        migrations.AlterField(
            model_name="order",
            name="user",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                to=settings.AUTH_USER_MODEL,
                verbose_name="user",
            ),
        ),
        migrations.AlterField(
            model_name="orderitem",
            name="item",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                to="market.item",
                verbose_name="item",
            ),
        ),
        migrations.AlterField(
            model_name="orderitem",
            name="ordered",
            field=models.BooleanField(default=False, verbose_name="ordered"),
        ),
        migrations.AlterField(
            model_name="orderitem",
            name="quantity",
            field=models.IntegerField(default=1, verbose_name="quantity"),
        ),
        migrations.AlterField(
            model_name="orderitem",
            name="user",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                to=settings.AUTH_USER_MODEL,
                verbose_name="user",
            ),
        ),
        migrations.AlterField(
            model_name="payment",
            name="amount",
            field=models.FloatField(verbose_name="amount"),
        ),
        migrations.AlterField(
            model_name="payment",
            name="stripe_charge_id",
            field=models.CharField(max_length=50, verbose_name="stripe charge id"),
        ),
        migrations.AlterField(
            model_name="payment",
            name="timestamp",
            field=models.DateTimeField(auto_now_add=True, verbose_name="timestamp"),
        ),
        migrations.AlterField(
            model_name="payment",
            name="user",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                to=settings.AUTH_USER_MODEL,
                verbose_name="user",
            ),
        ),
        migrations.AlterField(
            model_name="refund",
            name="accepted",
            field=models.BooleanField(default=False, verbose_name="accepted"),
        ),
        migrations.AlterField(
            model_name="refund",
            name="email",
            field=models.EmailField(max_length=254, verbose_name="email"),
        ),
        migrations.AlterField(
            model_name="refund",
            name="order",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                to="market.order",
                verbose_name="order",
            ),
        ),
        migrations.AlterField(
            model_name="refund",
            name="reason",
            field=models.TextField(verbose_name="reason"),
        ),
    ]
