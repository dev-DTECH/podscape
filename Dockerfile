FROM node:18.12.1

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV DJANGO_SUPERUSER_PASSWORD="admin"

WORKDIR /app/frontend

COPY ./frontend/package.json ./

# Installing node packages
RUN npm i

COPY ./frontend ./
# Building React app
RUN npm run build

WORKDIR /app

FROM ubuntu:22.04

RUN cp ./static/index.html ./templates/home.html

#RUN sed -i 's/\/assets/\/static\/assets/g' templates/home.html

FROM python:3.10

COPY requirements.txt ./

RUN pip install -r requirements.txt

COPY . .

RUN python manage.py makemigrations
RUN python manage.py migrate
RUN python manage.py makemigrations player
RUN python manage.py migrate player
RUN python manage.py makemigrations favourite
RUN python manage.py migrate favourite
RUN python manage.py createsuperuser --noinput --username admin@podscape.com --email admin@podscape.com


EXPOSE 8000

CMD ["python","manage.py","runserver","0.0.0.0:8000"]
