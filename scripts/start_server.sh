#! /bin/sh
cd /var/topmek
sudo docker build -t gug007/topmek .
sudo docker run -d -p 80:80 gug007/topmek
