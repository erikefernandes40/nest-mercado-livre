# REST API MERCADO LIVRE / NESTJS

## Description
<p align="center">REST API for registering products, users, orders, using the api Mercado Livre.</p>

### Features

- [x] User registration
- [x] Category registration
- [x] Product registration
- [x] Order registration

### Prerequisites

Before starting, you will need to have the following tools installed on your machine::
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker](https://www.docker.com/). 
Besides, it's good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/)

### 🎲  Running the backend (server)

```bash
# Clone this repository
$ git clone <https://github.com/erikefernandes40/nest-mercado-livre.git>

# Access the project folder in the terminal/cmd
$ cd mercado-libre

# install the dependencies
$ yarn

# Run the application
$ docker-compose up

# The server will start on port:3003 - access <http://localhost:3003>

### 🛠 Tecnologies

The following tools were used in building the project:

- [NestJs]
- [TypeScript]
- [Docker]
- [Prisma ORM]


### Routes

### To access the routes you must register a user. Then you must login to the application to receive a token that must be passed to access the other routes

# Aplication
http://localhost:3003/

# User
http://localhost:3003/user

# Products
http://localhost:3003/products

#Order
http://localhost:3003/order
