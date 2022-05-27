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
Besides, it's good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/),
[Insomnia](https://insomnia.rest/download) or [Postman](https://www.postman.com/downloads/).

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

# Create data in the database
$ yarn prisma db seed

# The server will start on port:3003 - access <http://localhost:3003>

# Create a user and login. Copy the generated auth token and paste in the indicated location to access protected routes
$ example of token generated: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJzdWIiOiIxNTc0MWVkMi1kZmVmLTQyYzMtYmFjZi05OTI2N2ZlYzU1OGYiLCJlbWFpbCI6ImVyaWNrZmVybmFuZG8xMjNAZ21haWwuY29tIiwibmFtZSI6ImVyaWNrIGZlcm5hbmRvIGFtYXJhbCIsImlhdCI6MTY1MzY2OTYyMywiZXhwIjoxNjU2MjYxNjIzfQ.Pj8P9IyN8nacPTLxccKlRhd6Y6Y2QW4A63R0Ttu8JLM

### 🛠 Tecnologies

The following tools were used in building the project:

- [NestJs]
- [TypeScript]
- [Docker]
- [Prisma ORM]
- [Swagger]


### Routes

### To access the routes you must register a user. Then you must login to the application to receive a token that must be passed to access the other routes

# Map of all routes
http://localhost:3003/api/

# Aplication
http://localhost:3003/

# User
http://localhost:3003/user

# Products
http://localhost:3003/products

# Order
http://localhost:3003/order

# how to access Database data
$type => mysql
$port => 3309
$user => root
@password = > root

# solution for possible erros 
$ 1- install dependencies inside docker ( yarn )

$ 2 - run ( yarn prisma migrate dev ) inside docker for create the database tables 
