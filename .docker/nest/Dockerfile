# Use the official Node.js 18 image as a base image
FROM node:21.7.1-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json from the nest directory
COPY ../../nest/package.json ../../nest/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code from the nest directory
COPY ../../nest .

# Build the NestJS application
RUN npm run build

# Expose the port that the app runs on
EXPOSE 3001

# Start the NestJS application
CMD ["npm", "run", "start:prod"]
