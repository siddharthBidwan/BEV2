# BEV2

BEV2 is a basic Node.js backend application built with Express.js. It includes a simple API and is configured to run in a Docker container.

## Features

- Basic Express.js server
- Example API endpoint at `/api/example`
- Environment variable support using `.env`
- Dockerized for easy deployment
- Nodemon for development with live reload

## Prerequisites

- [Node.js](https://nodejs.org/) (if running locally)
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) (if running in a container)

## Getting Started

### Running Locally

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd BEV2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root:
   ```
   PORT=3000
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

### Running with Docker

1. Build and start the Docker container:
   ```bash
   docker-compose up --build
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## API Endpoints

- **GET /**: Returns a welcome message.
- **GET /api/example**: Returns an example JSON response:
  ```json
  {
    "message": "This is an example API endpoint"
  }
  ```

## Project Structure

```
.
├── .dockerignore       # Files to ignore in Docker builds
├── .env                # Environment variables
├── .gitignore          # Files to ignore in Git
├── docker-compose.yml  # Docker Compose configuration
├── Dockerfile          # Dockerfile for building the app
├── index.js            # Main application entry point
├── package.json        # Project metadata and dependencies
├── routes/
│   └── api.js          # API routes
└── README.md           # Project documentation
```

## License

This project is licensed under the ISC License.