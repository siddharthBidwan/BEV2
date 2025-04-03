# Use the official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Ensure package.json exists in the project root
# Copy package.json and package-lock.json from the project root to /app
COPY ./package*.json ./

# Install dependencies
RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

# Copy the rest of the application code to /app
COPY . .

# Expose the application port
EXPOSE 3000

# Use nodemon to watch for file changes
CMD ["nodemon", "index.js"]
