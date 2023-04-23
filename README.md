# database-project

## Member Info

 - Ethan Wells - EthanMW2000
 - Khoa Dinh - dotkwah
 - Justin Buresh - jburesh98

## Video Link

[Youtube Video]()

## Getting Started

## Setup DB

For Mac/Linux,
In the root directory, following the Dockerfile.example create a Dockerfile (Just Dockerfile no extension). Then run the command:
`sh scripts/setup-db.sh`

For Windows,
In the root directory, following the Dockerfile.example create a Dockerfile (Just Dockerfile no extension). Then run the command:
`docker build -t dbproject .`
`docker run -d --name dbproject-container -e POSTGRES_DB=<db_name> -e POSTGRES_PASSWORD=<pass> -e POSTGRES_USER=<user> -p "5432:5432" dbproject`

This will create a Docker container with a Postgres image and serve as your local database.

## Setup .env

In the root directory, following the .env.example create a .env file. Then add the following:

``` .env
DB_HOST=localhost
DB_PORT=5432
DB_USER=<user>
DB_PASSWORD=<pass>
DB_NAME=<db_name>
```

## Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Commands

| Command                 | Description |
|-------------------------|-------------|
| `sh scripts/setup-db.sh` | Build DB docker container for Mac/Linux |
| `npm run dev`                   | Run the server |