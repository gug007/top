#! /bin/sh
cd /var/topmek
sudo docker build -t gug007/topmek .
sudo docker run -d -p 88:80 gug007/topmek
