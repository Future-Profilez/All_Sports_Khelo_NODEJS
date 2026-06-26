FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate
RUN node ./scripts/merge-schema.js

EXPOSE 5000

CMD ["npm","run","dev"]