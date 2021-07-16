FROM node:16-alpine3.12 

WORKDIR /Tasker

COPY . .

RUN npm install

CMD npm run start
