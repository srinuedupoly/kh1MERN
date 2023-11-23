# Stage 1: Build stage
FROM node:14 as builder

WORKDIR /app

# Clone the repository
RUN git clone https://github.com/srinuedupoly/kh1MERN.git .

# Navigate to the uiserver directory
WORKDIR /app/uiserver

# Install dependencies and build
RUN npm install
RUN npm run build

# Stage 2: Runtime stage
FROM node:14-alpine

WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/uiserver/build /app

# Install serve globally
RUN npm install -g serve

# Expose port 5000 (or the port used by the application)
EXPOSE 5000

# Command to run the application using serve
CMD ["serve", "-s", ".", "-p", "5000"]
