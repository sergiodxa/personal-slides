FROM mhart/alpine-node:8 as base
WORKDIR /usr/src
COPY package.json yarn.lock /usr/src/
RUN yarn install
COPY . .
RUN yarn build

FROM mhart/alpine-node:base-8
WORKDIR /usr/src
ENV NODE_ENV="production"
COPY --from=base /usr/src .
EXPOSE 3000
CMD ["node", "./node_modules/.bin/next", "start"]