@echo off
echo Installing dependencies...
npm install

echo.
echo Testing server startup...
node test-server.js

echo.
echo Starting server...
node backend/server.js
