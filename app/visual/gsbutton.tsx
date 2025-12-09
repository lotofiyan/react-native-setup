import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { Variants } from '@/stories/GSButton.stories';

export default function GSButtonVisualScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8fafc' }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 24,
        }}
        testID="visual-gsbutton"
      >
        <Variants {...(Variants.args as any)} />
      </View>
    </SafeAreaView>
  );
}
