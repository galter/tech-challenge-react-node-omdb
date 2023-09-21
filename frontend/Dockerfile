# Frontend Dockerfile for a Vite React project

# Start with the official Node.js image
FROM node:latest

# Set the working directory
WORKDIR /usr/src/app

# Install system dependencies (if any)

# Copy package.json and package-lock.json or yarn.lock
COPY package*.json ./
COPY yarn.lock ./

# Install app dependencies
RUN npm install
# If you are using Yarn, use the following line instead
# RUN yarn

# Copy the rest of the frontend code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["npm", "run", "dev"]
