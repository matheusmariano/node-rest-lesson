FROM node:carbon-alpine

RUN mkdir -p /home/app
WORKDIR /home/app

COPY . ./
RUN [ -f .env ] && source .env

RUN yarn install

CMD ["yarn", "start"]
