docker build -t dbproject .
docker run -d --name dbproject-container -p 5432:5432 gymarc-db