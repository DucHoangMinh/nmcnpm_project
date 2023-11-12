# Use Node.js 18.10.0 as the base image
FROM node:18.10.0

# Set the working directory inside the container
WORKDIR /app/web

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port if needed
# EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start"]
