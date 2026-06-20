# Use the official Node image as the base
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose Vite's default port
EXPOSE 5173

# Start the Vite development server on all interfaces
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]