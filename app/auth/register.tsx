import React, { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { GSButton, GSCard, SectionHeader } from '@/components/ui/gs-primitives';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <ScrollView
        className="flex-1 px-4 py-6"
        contentContainerStyle={{ paddingBottom: 32 }}>
        <View className="gap-4">
          <View className="gap-2">
            <Text className="text-2xl font-semibold text-typography-900">Create account</Text>
            <Text className="text-base text-typography-500">
              Spin up the starter kit with your workspace details.
            </Text>
          </View>

          <GSCard className="gap-4 shadow-soft-1">
            <SectionHeader title="Profile details" subtitle="We use this to personalize the kit" />
            <View className="gap-3">
              <InputField label="Full name" value={name} onChangeText={setName} placeholder="Alex Doe" />
              <InputField
                label="Work email"
                value={email}
                onChangeText={setEmail}
                placeholder="you@studio.com"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <InputField
                label="Password"
                value={password}
                onChangeText={setPassword}
                placeholder="Create a password"
                secureTextEntry
              />
              <GSButton label="Create account" icon="sparkles" />
              <View className="flex-row items-center justify-center gap-2">
                <Text className="text-sm text-typography-600">Already onboarded?</Text>
                <Pressable onPress={() => router.push('/auth/login')}>
                  <Text className="text-sm font-semibold text-primary-700">Sign in</Text>
                </Pressable>
              </View>
            </View>
          </GSCard>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function InputField({
  label,
  ...props
}: {
  label: string;
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}) {
  return (
    <View className="gap-2">
      <Text className="text-sm font-semibold text-typography-700">{label}</Text>
      <TextInput
        {...props}
        placeholderTextColor="#9CA3AF"
        className="rounded-xl border border-outline-100 bg-background-0 px-4 py-3 text-base text-typography-900"
      />
    </View>
  );
}
