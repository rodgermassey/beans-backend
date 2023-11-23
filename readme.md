IMPORTANT LEARNING :-

1. res.write() takes 3 arguments first is chunk (string, buffer, etc), 2nd and 3rd are optional, 2nd is encoding and third is an error callback.
2. If you want to manage 2 connections to the database, one using native driver i.e. MongoClient and other using the Mongoose i.e. Mongoose.connect you can use them together in the same file and Express will use connection pooling to manage the 2 connections efficiently.
3. Keep in mind to use (ASYNC/ AWAIT) whenever performing DB operations as they are asynchronous.
4. You can perform DB operations using mongoose models there are DB methods available on the models eg:- User.find(), User.findOne(), etc here (User) is our model name **REMEMBER TO USE AWAIT IN FRONT OF DB OPERATIONS LIKE THE ONES MENTIONED IN THE EXAMPLE ABOVE**

CHALLANGES :-
SETTING NODEMON :- unknown type error cannot read files with .ts extension => solution is to remove
("type": "module") from the package.json or we can use the following config in the tsconfig.json
(
"compilerOptions": {
"esModuleInterop": true,}
)
For this project I had to do a combination of both of the above solutions.

Setting up dotenv :-

1. Install dotenv npm package.
2. create an .env file and write your constants there like (TOKEN = '1234')
3. Go to the file where you want to access environment variable and import 'dotenv' from 'dotenv'.
4. call the (config()) function of (dotenv) object, thereafter you can use your process variables eg:- process.env.TOKEN

Setting up ESLINT and PRETTIER for node project:-

1. Install eslint with eslint documentation, use it for styling as well.
2. Install prettier with prettier documentation, and create a .prettierrc for styling.
3. Install eslint-plugin-prettier and configure it accordingly.
4. Install eslint-config-prettier to enforce styling and configure it accordingly.

Setting up NODEMON to run with TS :-

1. install nodemon and ts-node as dev dependencies in the project.
2. change the script and the main property of the package.json as you like to point towards the file you want to be the entry point of your project.

Setting up ROUTES for your project :-

1. use express.Router() method to create an (router) object (Read about router object in express).
2. use this object to register different route paths for your project.
3. create a single index file where all the router objects are imported and export a common router ocject from ther.
4. use this common router alongwith your express (app.use(router)) app to register all the desired routes.

Setting up GENERAL MIDDLEWARES for your project :-

1. set up general middlewares in your project's entry file like bodyParser middleware, etc. This helps your server to parse request body for all the incoming request.

Setting up DB connection for your project :-

1. make a connection (Write the code to connect to DB) to the db in a separate file (module) and export a function (that starts the connection) from that module and use that function in your index file i.e. the start of your project or wherever you want to establish a connection in your project.

Setting up Validations for API using JOI :-

1. We are setting up validations for our endpoints using JOI.
2. Create a factory function that will return a middleware function that will validate our request against the JOI schema we supply to the factory function.
3. Create a separate module where you create all you validation schemas.
4. **Importing non default exports from Joi will throw an error** and won't work in order to use them, use **Joi.types()** which returns the instance of all the native Joi schema types like (object, string, number, date, alphanum, etc.) which you can use directly for example (Joi.object().keys()) will be converted into (object.keys()), you can notice even the callable syntax has been removed from object schema **(object().keys() got converted to object.keys())**.
