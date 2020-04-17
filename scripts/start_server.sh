#! /bin/sh
cd /var/topmek
sudo docker rm $(sudo docker ps -a -q) -f
sudo docker rmi $(sudo docker obj -a -q)
# sudo docker build -t gug007/topmek .
# sudo docker run --rm -d -p 80:80 gug007/topmek
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
