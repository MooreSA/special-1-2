FROM node:lts-alpine

WORKDIR /app

COPY package*.json /app

COPY . /app

RUN npm install

EXPOSE 3000
ENV PORT 3000

CMD [ "npm", "run", "dev" ]
