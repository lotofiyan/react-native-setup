const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = withNativeWind(getDefaultConfig(__dirname), {
  input: './global.css',
});

config.resolver = {
  ...config.resolver,
  // Disable package.json "exports" field to avoid the invalid hasown config and fall back to "main".
  unstable_enablePackageExports: false,
};

module.exports = config;
