FROM node:16

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app/

EXPOSE 1212

CMD ["node", "main.js"]