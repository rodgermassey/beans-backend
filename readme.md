IMPORTANT LEARNING :-

1. res.write() takes 3 arguments first is chunk (string, buffer, etc), 2nd and 3rd are optional, 2nd is encoding and third is an error callback.

CHALLANGES :-
SETTING NODEMON :- unknown type error cannot read files with .ts extension => solution is to remove
("type": "module") from the package.json or we can use the following config in the tsconfig.json
(
"compilerOptions": {
"esModuleInterop": true,}
)
For this project I had to do a combination of both of the above solutions.

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

Setting up GENERAL MIDDLEWARES for you project :-

1. set up general middlewares in your project's entry file like bodyParser middleware, etc. This helps your server to parse request body for all the incoming request.
