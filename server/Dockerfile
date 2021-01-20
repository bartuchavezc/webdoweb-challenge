FROM node:14-alpine

# update packages
RUN apk update

RUN mkdir -p /usr/src/app

# create root application folder
WORKDIR /usr/src/app

# copy configs to /app folder
COPY package.json ./
RUN npm install --silent
COPY . .

# check files list
RUN ls -a

RUN npm run build

EXPOSE 4000

CMD [ "npm", "run", "start" ]