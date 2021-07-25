from django.urls import path

from market.api.views import AddCouponView
from market.api.views import AddressCreateView
from market.api.views import AddressDeleteView
from market.api.views import AddressListView
from market.api.views import AddressUpdateView
from market.api.views import AddToCartView
from market.api.views import CategoryDetailView
from market.api.views import CategoryListView
from market.api.views import CountryListView
from market.api.views import ItemDetailView
from market.api.views import ItemListView
from market.api.views import OrderDetailView
from market.api.views import OrderItemDeleteView
from market.api.views import OrderQuantityUpdateView
from market.api.views import PaymentListView
from market.api.views import PaymentView
from market.api.views import UserIDView

urlpatterns = [
    path("user-id/", UserIDView.as_view(), name="user-id"),
    path("countries/", CountryListView.as_view(), name="country-list"),
    path("addresses/", AddressListView.as_view(), name="address-list"),
    path("addresses/create/", AddressCreateView.as_view(), name="address-create"),
    path("addresses/<pk>/update/", AddressUpdateView.as_view(), name="address-update"),
    path("addresses/<pk>/delete/", AddressDeleteView.as_view(), name="address-delete"),
    path("products/", ItemListView.as_view(), name="product-list"),
    path("products/<pk>/", ItemDetailView.as_view(), name="product-detail"),
    path("categories/", CategoryListView.as_view(), name="category-list"),
    path("categories/<pk>/", CategoryDetailView.as_view(), name="category-detail"),
    path("add-to-cart/", AddToCartView.as_view(), name="add-to-cart"),
    path("order-summary/", OrderDetailView.as_view(), name="order-summary"),
    path("checkout/", PaymentView.as_view(), name="checkout"),
    path("add-coupon/", AddCouponView.as_view(), name="add-coupon"),
    path(
        "order-items/<pk>/delete/",
        OrderItemDeleteView.as_view(),
        name="order-item-delete",
    ),
    path(
        "order-item/update-quantity/",
        OrderQuantityUpdateView.as_view(),
        name="order-item-update-quantity",
    ),
    path("payments/", PaymentListView.as_view(), name="payment-list"),
]
