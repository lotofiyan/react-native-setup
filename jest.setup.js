import '@testing-library/jest-native/extend-expect';
import React from 'react';

// Avoid state-update-in-act warnings from vector icons
jest.mock('@expo/vector-icons', () => {
  const { Text } = require('react-native');
  return {
    Ionicons: (props) => <Text {...props}>{props.name || 'icon'}</Text>,
    MaterialIcons: (props) => <Text {...props}>{props.name || 'icon'}</Text>,
    FontAwesome: (props) => <Text {...props}>{props.name || 'icon'}</Text>,
  };
});
