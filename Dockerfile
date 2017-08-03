FROM node:8-slim

RUN apt-get update \
 && apt-get upgrade


ENV APP_PATH /app

WORKDIR $APP_PATH


