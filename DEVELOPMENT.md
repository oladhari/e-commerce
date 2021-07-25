## To run the application locally

please open 2 terminal tabs:
one fore the Django server and the other one for React server:

**To run Django server:**

```console
./manage.py runserver_plus
```

**To run React server:**

```console
npm run start # if you use npm
yarn start # if you use yarn
```

- to connect to the application: `http://localhost:3000/`
- to connect to the API address: `http://127.0.0.1:8000/api/` # this will list all available URLs for the API
- to connect to the admin CMS to add or edit or delete instances (items, categories ...): `http://127.0.0.1:8000/admin/`

make sure you have made a super user account to be able to connect to admin CMS,
if you do not have an super user account yet please make one with this command:

```console
python3 manage.py createsuperuser
```

NB: to be able to add to cart and purchase items you should be logged in first

**customize local host for django:**
we use a customized host for our backend, please edit your `/etc/hosts/`

```json
127.0.0.1       ecom.local
```

as in `dev.py` we already configured the local host to use:

```python
BASE_URL = "http://ecom.local:8000"
```

## Issues

please describe your task clearly and try to add a detailed checklist in purpose to finish your task

## Branch Names

we use semnatic commit messages rule to make the commit messages more readable and clear
[here](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) you can find a link about it

and we use almost the same rule for branches, we avoid to do any changes in master branch to avoid any future conflict as a team
the branch name should start with one the semantic types then the related issue number
example adding header feature related to issue N 136 , format will be `feat/136_header`

Format: `<type>(<scope>)/<issue_number>_<subject>`

## Breakpoint backend:

make sure you have `ipdb` installed in your local virtualenv
**to set a breakpoint:**

```python
import ipdb; ipdb.set_trace()
```
