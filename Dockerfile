# Stage 1: Build Angular + SSR
FROM node:22 AS builder

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app source
COPY . .

# Build browser and server (Angular Universal)
RUN npm run build

# Stage 2: Run with Node.js v22
FROM node:22-alpine

WORKDIR /app

# Copy built dist and node_modules
COPY --from=builder /app/dist /app/dist

# Set environment variable (optional)
ENV NODE_ENV=production

# Expose port (adjust if server.mjs uses a different one)
EXPOSE 4000

# Start the SSR server
CMD ["node", "dist/agungdh.my.id/server/server.mjs"]
