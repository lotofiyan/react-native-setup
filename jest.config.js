module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['./jest.setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/.expo/'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|expo|@expo|expo-modules|@expo-google-fonts|@unimodules|@react-navigation|@storybook|@gluestack-ui|@legendapp|@fortawesome|react-native-svg|react-native-reanimated|react-native-gesture-handler)',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  watchman: false,
};
