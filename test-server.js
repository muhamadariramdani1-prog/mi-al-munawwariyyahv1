// Simple test script to validate server startup and basic functionality
const express = require('express');
const path = require('path');

console.log('Testing server startup...');

// Test 1: Check if all required modules can be loaded
try {
  const db = require('./backend/models/init.js');
  console.log('✓ Database module loaded successfully');

  const auth = require('./backend/middleware/auth');
  console.log('✓ Auth middleware loaded successfully');

  const role = require('./backend/middleware/role');
  console.log('✓ Role middleware loaded successfully');

  // Test 2: Check if routes can be loaded
  const authRoutes = require('./backend/routes/auth');
  console.log('✓ Auth routes loaded successfully');

  const cmsRoutes = require('./backend/routes/cms');
  console.log('✓ CMS routes loaded successfully');

  const ppdbRoutes = require('./backend/routes/ppdb');
  console.log('✓ PPDB routes loaded successfully');

  const sppRoutes = require('./backend/routes/spp');
  console.log('✓ SPP routes loaded successfully');

  const infaqRoutes = require('./backend/routes/infaq');
  console.log('✓ Infaq routes loaded successfully');

  const absensiRoutes = require('./backend/routes/absensi');
  console.log('✓ Absensi routes loaded successfully');

  const raportRoutes = require('./backend/routes/raport');
  console.log('✓ Raport routes loaded successfully');

  const elearningRoutes = require('./backend/routes/elearning');
  console.log('✓ E-learning routes loaded successfully');

  console.log('\n🎉 All modules loaded successfully!');
  console.log('✅ Server is ready to run');
  console.log('💡 Run: npm start');

} catch (error) {
  console.error('❌ Error loading modules:', error.message);
  process.exit(1);
}
