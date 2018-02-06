# API REST with Node

A sample project using Node.

## Install

Run `yarn install` to install dependencies and `cp .env.example .env` to add environment variables.

## Running

Run `yarn dev` to start the development server or `yarn start` to start the production server.

## Docker

You have to generate a `docker-compose.yml` file from base files using the command `docker-compose -f dc-base.yml -f dc-{env}.yml config > docker-compose.yml` then run `docker-compose up -d` to start the server.
