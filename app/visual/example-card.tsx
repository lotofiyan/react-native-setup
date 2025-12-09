import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { Basic } from '@/stories/Example.stories';

export default function ExampleCardScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8fafc' }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 24,
        }}
        testID="visual-example-card"
      >
        <Basic {...(Basic.args as any)} />
      </View>
    </SafeAreaView>
  );
}
