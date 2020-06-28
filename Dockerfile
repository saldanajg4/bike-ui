FROM node:12.14.1

WORKDIR /code

ENV PORT 4200

COPY package.json /code/package.json

RUN npm install

COPY . /code

CMD ["node", "./server.js"]
