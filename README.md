<p align="center">
  An ecommerce for selling products online.
</p>

## Backend development workflow

we advise to use `virtualenvwrapper` more easy and flexible to use
you can follow the documentation [here](https://virtualenvwrapper.readthedocs.io/en/latest/).

**with normal virtualenv:**

```json
virtualenv env
source env/bin/activate
pip install -r requirements.txt
python manage.py runserver
```

**with virtualenvwrapper:**

```json
mkvirtualenv <name_your_virtualenv> -p /usr/bin/python3.8
pip install -r requirements.txt
python manage.py runserver
```

## Frontend development workflow

**with npm:**

```json
npm i
npm start
```

**with yarn:**

**installation**
```shell
yarn
```

**start development environment**
```shell
yarn start
```

## For deploying

**with npm:**

```json
npm run build
```

**with yarn:**

```json
yarn build
```

---
