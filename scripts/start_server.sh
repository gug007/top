#! /bin/sh
sudo docker build -t gug007/topmek .
sudo dcoker run -d -p 88:80 gug007/topmek
