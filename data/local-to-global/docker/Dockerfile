FROM node:alpine

RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN yarn --prod

COPY index.js /app

EXPOSE 3000

CMD ["yarn", "start"]