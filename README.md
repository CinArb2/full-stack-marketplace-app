# Full-Stack Marketplace App

This repository contains the front-end and back-end of a full-stack marketplace application. The application is built using React for the front-end and Node.js with Express for the back-end. Below you will find information about the packages and scripts used in each part of the application.

## Front-end (ecommerce-react)

### Technologies Used

- React: A JavaScript library for building user interfaces.
- React Router: A routing library for React applications.
- Redux: A predictable state container for JavaScript applications.
- Axios: A promise-based HTTP client for making API requests.
- React Icons: A library that provides popular icon packs for React applications.
- React Slick: A carousel component for React.
- Web Vitals: A library for measuring web performance metrics.

## Back-end (marketplace-backend)

### Technologies Used

- Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- Express: A fast and minimalist web application framework for Node.js.
- Sequelize: A promise-based ORM (Object-Relational Mapping) for Node.js.
- PostgreSQL: A powerful, open-source relational database system.
- Firebase: A comprehensive development platform for building web and mobile applications.
- Bcrypt: A library for hashing and salting passwords.
- Helmet: A set of middleware functions to secure Express applications.
- Morgan: A HTTP request logger middleware for Node.js.
- Dotenv: A module to load environment variables from a .env file.
- Multer: A middleware for handling multipart/form-data, used for file uploads.
- Express Rate Limit: A middleware for rate-limiting HTTP requests.
- Express Validator: A set of express.js middlewares for request validation.

## Getting Started

To start using the full-stack marketplace application, follow these steps:

```
# Install locally
$ git clone git@github.com:CinArb2/full-stack-marketplace-app.git

# Install dependencies
$ cd ~/full-stack-marketplace-app
$ pnpm install:app
```
## Environment Variables

To run the app locally, you will need to create a .env file in the server app of this repo that contains the following:
```
NODE_ENV=...
DB_HOST=...
DB_USERNAME=...
DB_PASSWORD=...
DB_PORT=...
DB_NAME=...
FIREBASE_API_KEY=...
FIREBASE_PROJECT_ID=...
FIREBASE_STORAGE=...
FIREBASE_APP_ID=...
JWT_SECRET=...
JWT_EXPIRES_IN=...
```
Also create another .env file on the client app with the following information:

```
REACT_APP_API_URL=...
```
## Running Locally

You can start both, the front end and the backend of this apps at the same time or independetly from the root of the project:

```
# Start front end and backend
pnpm start:app

# Start front end
pnpm start:client

# Start backend
pnpm start:server
```

That's it! You now have the full-stack marketplace application up and running on your local machine. Feel free to explore the features and customize it according to your needs.
