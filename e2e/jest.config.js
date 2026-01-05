module.exports = {
  testEnvironment: 'detox/runners/jest/testEnvironment',
  globalSetup: 'detox/runners/jest/globalSetup',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  testRunner: 'jest-circus/runner',
  testTimeout: 120000,
  setupFilesAfterEnv: ['./setup.js'],
};
