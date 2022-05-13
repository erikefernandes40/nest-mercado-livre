FROM node:16.13.2

WORKDIR /app

COPY package*.json ./
COPY ./prisma/ ./prisma/
RUN npx prisma generate

RUN npm install

COPY  . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:dev"]