FROM node:16.13.2

WORKDIR /app

COPY package*.json ./
COPY ./prisma/ ./prisma/
RUN yarn prisma generate

RUN yarn

COPY  . .

RUN yarn build

EXPOSE 3000
ENV NODE_ENV development
CMD ["yarn", "start:dev"]