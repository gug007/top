FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# RUN npm install pm2 -g
# RUN npm start

# CMD ["pm2-runtime", "index.js"]

