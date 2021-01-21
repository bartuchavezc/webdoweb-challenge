FROM node:14-alpine

RUN mkdir -p /usr/src/app

WORKDIR /user/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install --silent
# RUN npm install react-scripts --silent

COPY . .

EXPOSE 3000

CMD ["npm", "start"]