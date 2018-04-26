FROM node:9.3.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app

EXPOSE 3000
CMD [ "npm", "start" ]
