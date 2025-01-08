# My API App

A simple API application built with TypeScript and Express.

## Project Structure

my-api-app/
├── package.json
├── src/ │
├── app.ts
│
├── controllers/
│ │ └── index.ts
│ ├── models/
│
│ └── index.ts
│ └── routes/
│ └── router.ts
├── tsconfig.json
└── README.md


## Files

### `package.json`
Contains metadata about the project and dependencies. Key scripts include:
- `start`: Runs the application using `ts-node`.
- `build`: Compiles the TypeScript code to JavaScript using `tsc`.

### `tsconfig.json`
TypeScript configuration file specifying compiler options and file inclusions/exclusions.

### `src/app.ts`
The main entry point of the application. It sets up the Express server and routes.

### `src/controllers/index.ts`
Contains the `IndexController` class which handles the API endpoints for managing cars. It includes methods for:
- `getCars`: Retrieves the list of cars.
- `createCar`: Adds a new car to the list.

### `src/models/index.ts`
Defines the `Car` class which represents a car object. It includes methods for:
- `fromJson`: Creates a `Car` instance from a JSON object.
- `toJson`: Converts a `Car` instance to a JSON object.

### `src/routes/router.ts`
Defines the routes for the API. It sets up the endpoints and binds them to the controller methods.

## Building the Project

To build the project, follow these steps:

1. Install dependencies:
    ```sh
    npm install
    ```

2. Compile the TypeScript code:
    ```sh
    npm run build
    ```

3. Start the application:
    ```sh
    npm start
    ```

The server will start running on `http://localhost:3000` (or the port specified in the [PORT](http://_vscodecontentref_/6) environment variable).

## API Endpoints

- `GET /api/cars`: Retrieves the list of cars.
- `POST /api/cars`: Adds a new car to the list. Requires [make](http://_vscodecontentref_/7) and [model](http://_vscodecontentref_/8) in the request body.