#! /bin/sh
docker build -t gug007/topmek .
dcoker run -d -p 88:80 gug007/topmek
