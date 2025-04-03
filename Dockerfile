# Use the official Node.js 18 image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Ensure package.json exists in the project root
# Copy package.json and package-lock.json from the project root to /app
COPY ./package*.json ./

# Copy the Firebase configuration file to /app
COPY ./galiv1-firebase-adminsdk.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to /app
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
