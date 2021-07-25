"""Use this for development"""
from .base import *
from .base import INSTALLED_APPS
from .base import MIDDLEWARE


BASE_URL = "http://ecom.local:8000"
ALLOWED_HOSTS += ["127.0.0.1"]
DEBUG = True

WSGI_APPLICATION = "home.wsgi.dev.application"
INSTALLED_APPS += ["django_extensions", "debug_toolbar"]

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR /"db.sqlite3",
    }
}
MIDDLEWARE += ["debug_toolbar.middleware.DebugToolbarMiddleware"]
INTERNAL_IPS = ["127.0.0.1"]
CORS_ORIGIN_WHITELIST = ("http://localhost:3000",)


# STRIPE_PUBLIC_KEY = config('STRIPE_TEST_PUBLIC_KEY')
# STRIPE_SECRET_KEY = config('STRIPE_TEST_SECRET_KEY')
