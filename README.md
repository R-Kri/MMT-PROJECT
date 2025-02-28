# MMT-PROJECT

This is a clone Project of MakeMyTrip focusing mainly on the three services which is flights, hotels and tours.

There are two major folders in the projects :-
`client` -> In this folder all the frontend code is available. In the project we have used react library of JS and vite module bundler to speed up our development process.

`server` -> In this folder all the backend code is available. We have used Nodejs with express framework.

Lets take a look inside the `src` folder of server folder

 - `config` -> In this folder anything and everything regarding any configurations or setup of a library or module will be done. For example: setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is done in the `server-config.js`. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here. 

 - `routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it. 

 - `middlewares` -> they are just going to intercept the incoming requests where we can write our validators, authenticators etc. 

 - `controllers` -> they are kind of the last middlewares as post them you call you business layer to execute the budiness logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output. 

 - `repositories` -> this folder contains all the logic using which we interact the DB by writing queries, all the raw queries or ORM queries will go here.

 - `services` -> contains the buiness logic and interacts with repositories for data from the database

 - `utils` -> contains helper methods, error classes etc.


 ### Set up the Project

- Clone the project to you local machine
 - Go inside the folder path and execute the following command:
 ```
 npm install
 ```

 In the root directory of server create a `.env` file and add the following env variables

 ```
    PORT = <Port number of your choice>
 ```

 - Inside the `src/config` folder create a file named as `config.json` and write the following code

 ```
 {
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
 ```

 - If you are setting up our development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using for e.g: mysql, mariadb etc.

 - If you are setting up test or prod environment, make sure you also replace the host with the hosted db url.

 