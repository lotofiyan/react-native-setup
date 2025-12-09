import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { GSButton, GSCard, SectionHeader } from '@/components/ui/gs-primitives';

export default function ResetScreen() {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <ScrollView
        className="flex-1 px-4 py-6"
        contentContainerStyle={{ paddingBottom: 32 }}>
        <View className="gap-4">
          <View className="gap-2">
            <Text className="text-2xl font-semibold text-typography-900">Reset password</Text>
            <Text className="text-base text-typography-500">
              We will send a secure link to get you back into the starter kit.
            </Text>
          </View>

          <GSCard className="gap-4 shadow-soft-1">
            <SectionHeader title="Send recovery link" subtitle="Use the email tied to your account" />
            <View className="gap-3">
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="team@product.com"
                placeholderTextColor="#9CA3AF"
                keyboardType="email-address"
                autoCapitalize="none"
                className="rounded-xl border border-outline-100 bg-background-0 px-4 py-3 text-base text-typography-900"
              />
              <GSButton label="Send link" icon="mail-outline" />
              <GSButton
                label="Back to sign in"
                icon="arrow-back"
                variant="ghost"
                onPress={() => router.back()}
              />
            </View>
          </GSCard>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
