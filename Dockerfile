FROM node:19-alpine3.17
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]