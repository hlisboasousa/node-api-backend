# API REST - RocketMat recruit

This project consist on a simple API rest for manipulating registers of departments and collaborators of a company.
It is developed using NodeJs and utilizes the Mongodb Altas service for database storage.

- Require: node version > 15.
- Link to React-admin frontend developed for this application: https://github.com/hlisboasousa/rocketmat-frontend


## Run info
- Cloning the repository:
```
git clone 'git@github.com:hlisboasousa/rocketmat-backend.git'
```
- Access root:
```
cd rockemat-backend/
```
- Instal dependencies
```
yarn
```
- Running with nodemon
```
yarn dev
```
- Running without nodemon
```
yarn start
```
## Notes
- The port is originally setted to localhost:5001 and can be changed in server.js file;
- Only listed IP's can access the Mongodb Atlas database service.
