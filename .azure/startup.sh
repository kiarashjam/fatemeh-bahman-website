#!/bin/bash
# Azure Web App startup script for Next.js

# Install dependencies
npm install --production

# Build the application
npm run build

# Start the application
npm start
