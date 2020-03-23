# restaurants_express
Web de restaurants amb Express i MongoDB sobre Docker.

## Quick Start

To run express server in development mode:
```bash
npm run dev
```

To run express server in production mode:
```bash
npm run start
```


```bash
# Run MongoDB in Docker
docker-compose up
# use -d flag to run in background

# Tear down
docker-compose down

# To re-build
docker-compose build
```

## MongoDB
Executar MongoDB i Mongo-Express
```
docker-compose up -d
```
Per accedir a Mongo-Express:
[http://localhost:8081](http://localhost:8081)
- Usuari: ```restaurants```
- Password: ```restaurants```