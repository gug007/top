FROM node:10

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

CMD if [ ${NODE_ENV} = production ]; then \
	npm run build && \
	npm start; \
	else \
	npm run dev; \
	fi
