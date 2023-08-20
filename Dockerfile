FROM node:18.12.1 as builder

WORKDIR /app

WORKDIR /app/frontend

COPY ./frontend/package.json ./frontend/yarn.lock ./

# Installing node packages
RUN #npm install --global yarn
RUN yarn install

COPY ./frontend ./
# Building React app
RUN yarn build

FROM python:3.10

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV DJANGO_SUPERUSER_PASSWORD="admin"

COPY requirements.txt ./

RUN pip install -r requirements.txt

COPY . .

COPY --from=builder /app/static/index.html ./templates/home.html
COPY --from=builder /app/static ./static

RUN python manage.py makemigrations
RUN python manage.py migrate
RUN python manage.py makemigrations player
RUN python manage.py migrate player
RUN python manage.py makemigrations favourite
RUN python manage.py migrate favourite
RUN python manage.py createsuperuser --noinput --username admin@podscape.com --email admin@podscape.com

EXPOSE 8000

CMD ["python","manage.py","runserver","0.0.0.0:8000"]
