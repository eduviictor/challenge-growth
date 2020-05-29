FROM node:12.16.3-alpine

# Create Directory for the Container
WORKDIR /app

COPY package.json ./app
RUN yarn

ADD . /app

EXPOSE 3000