<p align="center">
  An ecommerce for selling products online.
</p>

## Backend development workflow

we advise to use `virtualenvwrapper` more easy and flexible to use
you can follow the documentation [here](https://virtualenvwrapper.readthedocs.io/en/latest/)

_with normal virtualenv_

```json
virtualenv env
source env/bin/activate
pip install -r requirements.txt
python manage.py runserver
```

_with virtualenvwrapper_

```json
mkvirtualenv <name_your_virtualenv> -p /usr/bin/python3.8
pip install -r requirements.txt
python manage.py runserver
```

## Frontend development workflow

we are using npm for this project

```json
yarn
yarn start
```

## For deploying

```json
yarn build
```

---
