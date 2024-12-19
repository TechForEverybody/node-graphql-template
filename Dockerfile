FROM node:18-alpine as build
WORKDIR /app
COPY package.json .
RUN npm install typescript
RUN npm install --force
COPY . . 
RUN npm run build
COPY .env ./dist
EXPOSE 9000
CMD npm run start
