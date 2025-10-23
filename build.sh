#!/bin/bash

# Build script for ntevo.com website

echo "🚀 Building ntevo.com website..."

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
fi

# Run build
echo "🔨 Running Vite build..."
npm run build

# Copy _headers to dist
echo "📄 Copying _headers to dist..."
cp _headers dist/

echo "✅ Build complete! Output in dist/"
