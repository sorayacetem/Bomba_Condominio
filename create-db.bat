@echo off
cls

docker run -d --name cetem-bombas -p 3306:3306 --env MARIADB_ROOT_PASSWORD=root mariadb:latest

pause