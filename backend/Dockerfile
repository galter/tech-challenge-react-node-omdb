# Node.js backend Dockerfile

# Use the official Node.js runtime as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the application dependencies
RUN yarn install

# Copy the rest of the application code into the container
COPY . .

# Expose port 3001 for the backend server
EXPOSE 4000

# Start the application
CMD ["yarn", "dev"]
