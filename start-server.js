#!/usr/bin/env node

/**
 * News API Backend Server
 * Starts the Express server and tests connectivity
 */

const { spawn } = require('child_process');
const http = require('http');
const path = require('path');

console.log('🚀 Starting News AI Backend Server...\n');

// Start the server
const server = spawn('node', [path.join(__dirname, 'index.js')], {
  stdio: 'inherit',
  shell: true
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n\n📛 Shutting down server...');
  server.kill();
  process.exit(0);
});

server.on('error', (error) => {
  console.error('❌ Failed to start server:', error.message);
  process.exit(1);
});

server.on('exit', (code) => {
  if (code !== 0) {
    console.error(`❌ Server exited with code ${code}`);
  }
});
