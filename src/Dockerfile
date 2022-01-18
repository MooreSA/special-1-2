FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install


EXPOSE 3000
ENV PORT 3000

CMD [ "npm", "run", "dev" ]
