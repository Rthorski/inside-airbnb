FROM node:lts-alpine

WORKDIR /expres-app
COPY package*.json ./
RUN npm install pg
RUN npm install cors

COPY . .

EXPOSE 5001

CMD node server.js