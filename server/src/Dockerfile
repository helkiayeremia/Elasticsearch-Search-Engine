FROM node:10.15.3-alpine

WORKDIR /app

COPY package.json ./

RUN npm install
RUN npm install -g pm2

COPY . ./

EXPOSE 3001
EXPOSE 9200

CMD ["npm", "run", "start"]