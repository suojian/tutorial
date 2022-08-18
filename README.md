# tutorial
The Tutorial system
System requirement:
JDK: OpenJDK18
MarinaDB: 10.10
Backend framework: DropWizard
Frontend framework: React
Backend building tool: gradle

Marina installation:
https://mariadb.org/
1. install docker
   https://www.docker.com/get-started/ download Docker Desktop, and install docker.
2. install MariaDb docker image
```shell
docker pull mariadb
```
3. create and start MariaDB service
```shell
docker run --detach --name tutorialdb --env MARIADB_USER=root --env MARIADB_PASSWORD=root --env MARIADB_ROOT_PASSWORD=root -p 3306:3306 -p 8110:8080  mariadb:latest
```
4. stop Marina DB
```shell
docker stop tutorialdb
```
5. start Marina DB
```shell
docker start tutorialdb
```
6. download mysqlworkbench
   https://dev.mysql.com/downloads/workbench/
