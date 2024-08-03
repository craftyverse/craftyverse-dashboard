FROM node:18-alpine

WORKDIR /usr/app

COPY .npmrc ./

COPY package.json .

RUN npm install

RUN rm -f .npmrc

COPY . .

ENV PORT 5173

EXPOSE $PORT

CMD ["npm", "run", "dev:local"]
