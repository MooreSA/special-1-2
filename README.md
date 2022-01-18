# Deployment Ready MENN Stack

This is a deployment ready Dockerized MENN Stack with Typescript

## Built with

- Docker
- MongoDB
- NextJS
- Typescript

## Getting Started

### Pre-requisites

docker-compose

https://docs.docker.com/compose/

docker

https://www.docker.com/

## Usage

The src directory contains the code for the NextJS front and backends

The mongo directory contains the code for populating the database on load. Currently the database is empty.

MongoDB is unconfigured in this example. It is possible to configure it through the docker-compose.yml and the docker-compose-prod.yml files.

- Build the development environment

  `docker-compose build`

- Run the containers

  `docker-compose up`

- Stop the containers

  `docker-compose down`

When the development container is running, it will use port 3000, this is configurable through docker-compose.yml and /src/Dockerfile

Access the environment through
http://localhost:3000

This container, for maximum compatibility includes a file .babelrc inside of src. This will disable the SWC based compiler.

## Deploying

**IMPORTANT**

Before deploying **ANYTHING** with this boilerplate, ensure that you change the configuration of MongoDB. It is not secure in it's current configuration

This boilerplate has two docker-compose files. docker-compose-prod.yml in the root directory will create and deploy a production-ready build of an app.

- The production docker-compose can be used through

  `docker-compose -f 'docker-compose-prod.yml' up -build`

The application is running by default on Port 443, if you wish to change the port the app is running on, the docker-compose-prod.yml in combination with the Dockerfile.prod inside the src directory
