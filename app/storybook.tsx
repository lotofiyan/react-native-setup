import React, { useEffect, useState } from 'react';
import { Platform, Pressable, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function StorybookScreen() {
  const insets = useSafeAreaInsets();
  const [StorybookUIRoot, setStorybookUIRoot] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    if (Platform.OS !== 'web') {
      // Dynamically require to avoid crashing on web
      const { StorybookUIRoot: UI } = require('../storybook.requires');
      setStorybookUIRoot(() => UI);
    }
  }, []);

  if (Platform.OS === 'web') {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 12 }}>Storybook</Text>
        <Text style={{ textAlign: 'center', color: '#4B5563' }}>
          Storybook for React Native is only available on native devices/simulators. Use the visual
          routes under /visual/* for web previews.
        </Text>
        <Pressable
          onPress={() => router.replace('/(tabs)')}
          style={{
            marginTop: 16,
            backgroundColor: '#111827',
            paddingVertical: 10,
            paddingHorizontal: 14,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: '#fff', fontWeight: '600' }}>Back to app</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  if (!StorybookUIRoot) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          position: 'absolute',
          top: insets.top + 8,
          right: 12,
          zIndex: 1,
        }}
      >
        <Pressable
          onPress={() => router.replace('/(tabs)')}
          style={{
            backgroundColor: 'rgba(17,24,39,0.9)',
            paddingVertical: 10,
            paddingHorizontal: 14,
            borderRadius: 12,
            shadowColor: '#000',
            shadowOpacity: 0.18,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            elevation: 3,
          }}
        >
          <Text style={{ color: '#fff', fontWeight: '600' }}>Back to app</Text>
        </Pressable>
      </View>
      <StorybookUIRoot />
    </SafeAreaView>
  );
}
