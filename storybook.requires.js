import { configure, getStorybookUI } from '@storybook/react-native';

// Manually require stories for React Native
configure(() => {
  require('./stories/Example.stories');
  require('./stories/GSButton.stories');
}, module);

export const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});
