## Getting Started

## Setup DB

In the root directory, following the Dockerfile.example create a Dockerfile (Just Dockerfile no extension). Then run the command:
`sh scripts/setup-db.sh`

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
| `sh scripts/setup-db.sh` | Build DB docker container |
| `npm run dev`                   | Run the server |