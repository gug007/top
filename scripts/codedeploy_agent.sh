#! /bin/sh
sudo yum update -y
sudo yum install ruby -y
sudo yum install wget
cd /home/ec2-user
wget https://aws-codedeploy-us-east-2.s3.us-east-2.amazonaws.com/latest/install
chmod +x ./install
sudo ./install auto
sudo mkdir /var/topmek
sudo yum install docker -y
sudo service docker start
sudo usermod -a -G docker ec2-user

sudo curl -L https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
