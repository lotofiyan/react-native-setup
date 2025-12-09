import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { GSButton, GSCard, SectionHeader } from '@/components/ui/gs-primitives';

export default function OTPScreen() {
  const [code, setCode] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <ScrollView
        className="flex-1 px-4 py-6"
        contentContainerStyle={{ paddingBottom: 32 }}>
        <View className="gap-4">
          <View className="gap-2">
            <Text className="text-2xl font-semibold text-typography-900">Check your inbox</Text>
            <Text className="text-base text-typography-500">
              Enter the six-digit code we sent to verify your session.
            </Text>
          </View>

          <GSCard className="gap-4 shadow-soft-1">
            <SectionHeader title="Verification" subtitle="One-time password" />
            <View className="gap-3">
              <TextInput
                value={code}
                onChangeText={setCode}
                placeholder="123 456"
                keyboardType="number-pad"
                maxLength={6}
                placeholderTextColor="#9CA3AF"
                className="rounded-xl border border-outline-100 bg-background-0 px-4 py-3 text-center text-xl font-semibold text-typography-900"
                style={{ letterSpacing: 8 }}
              />
              <GSButton
                label="Verify"
                icon="shield-checkmark-outline"
                onPress={() => router.push('/(tabs)')}
              />
              <GSButton label="Resend code" icon="refresh" variant="ghost" />
            </View>
          </GSCard>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
