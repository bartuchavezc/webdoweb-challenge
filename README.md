## WEB APP CHALLENGE (URL tracking service)

URL tracking service and domain appearance counter.



### Run guide

<hr>

If you have docker and  <a href=" https://docs.docker.com/compose/ "> docker-compose</a> installed, you can just run this in the terminal.

```bash
docker-compose build
docker-compose up
```



To change the expose ports in root folder edit the `docker-compose.yml` file and change: 

```yml
#for react service
ports:
	- 3000:3000
```

```yml
#for node api default 9090
#change port in node service
ports: 
	- 9090:4000
#and change in the react service 
environment:
      API_URL: http://localhost:${NEW_PORT}/api/v1
```

<b>See your app runing in localhost:3000</b>

<b>localhost:9090 to test backend</b>

<hr>

To normal running you need:

In `server` folder copy the `.env.example` to `.env`, set the enviroment variables and then run: 

```bash
npm i
npm run start
```

For react app, in `client` folder copy the `.env.example` to `.env`, set the url api you choose for node api and run:

```bash
npm i
npm run start
```

 <b>See your app runing in localhost:3000</b>