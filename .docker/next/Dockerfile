# Use the official Node.js 18 image as a base image
FROM node:21.7.1-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json from the next directory
COPY ../../next/package.json ../../next/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code from the next directory
COPY ../../next .

# Build the nextJS application
RUN npm run build

# Expose the port that the app runs on
EXPOSE 3000

# Start the nextJS application
CMD ["npm", "run", "start:prod"]
