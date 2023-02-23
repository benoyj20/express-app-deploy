FROM node:16-alpine

WORKDIR /app

EXPOSE 5000

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]