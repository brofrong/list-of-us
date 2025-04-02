FROM oven/bun:alpine AS build

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

# Use a lightweight Node.js image for serving static files
FROM node:18-alpine AS serve

# Install `serve`
RUN npm install -g serve

# Set the working directory
WORKDIR /app

# Copy built files from the previous stage
COPY --from=build /app/dist ./dist

# Expose the port `serve` will use
EXPOSE 3000

# Run `serve` to serve static files from the dist directory
CMD ["serve", "-s", "dist", "-l", "3000"]