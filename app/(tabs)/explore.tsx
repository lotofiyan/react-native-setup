import React, { useState } from 'react';
import { ScrollView, Switch, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  GSButton,
  GSCard,
  GSChip,
  GSTag,
  SectionHeader,
} from '@/components/ui/gs-primitives';

export default function ComponentsScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notifications, setNotifications] = useState(true);
  const [vibrations, setVibrations] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <ScrollView
        className="flex-1 px-4 py-5"
        contentContainerStyle={{
          paddingBottom: 32,
        }}>
        <View className="gap-4">
          <View className="gap-2">
            <Text className="text-2xl font-semibold text-typography-900">Component kit</Text>
            <Text className="text-base text-typography-500">
              Ready-to-use gluestack-inspired blocks: buttons, forms, cards, and settings rows.
            </Text>
          </View>

          <GSCard className="gap-4 shadow-soft-1">
            <SectionHeader title="Buttons" subtitle="Primary, outline, and ghost states" />
            <View className="flex-row flex-wrap gap-3">
              <GSButton label="Primary" icon="flash" />
              <GSButton label="Success" icon="checkmark-circle" tone="success" />
              <GSButton label="Outline" icon="color-wand" variant="outline" />
              <GSButton label="Ghost" icon="ellipse-outline" variant="ghost" />
            </View>
          </GSCard>

          <GSCard className="gap-4 shadow-soft-1">
            <SectionHeader title="Forms" subtitle="Inputs styled with gluestack tokens" />
            <View className="gap-3">
              <View className="gap-2">
                <Text className="text-sm font-semibold text-typography-700">Email</Text>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="you@example.com"
                  testID="input-email"
                  placeholderTextColor="#9CA3AF"
                  className="rounded-xl border border-outline-100 bg-background-0 px-4 py-3 text-base text-typography-900"
                />
              </View>
              <View className="gap-2">
                <Text className="text-sm font-semibold text-typography-700">Password</Text>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="••••••••"
                  secureTextEntry
                  placeholderTextColor="#9CA3AF"
                  className="rounded-xl border border-outline-100 bg-background-0 px-4 py-3 text-base text-typography-900"
                />
              </View>
              <GSButton label="Continue" icon="arrow-forward" />
            </View>
          </GSCard>

          <GSCard className="gap-4 shadow-soft-1">
            <SectionHeader title="Toggles" subtitle="Settings rows with switches and tags" />
            <View className="gap-4">
              <SettingRow
                label="Push notifications"
                description="Product updates, activity alerts, and offers."
                value={notifications}
                onChange={setNotifications}
              />
              <SettingRow
                label="Vibration"
                description="Haptic feedback on critical alerts."
                value={vibrations}
                onChange={setVibrations}
              />
              <SettingRow
                label="Dark mode"
                description="Follows system preference automatically."
                value
                disabled
                tag={<GSTag label="Adaptive" tone="info" />}
              />
            </View>
          </GSCard>

          <GSCard className="gap-4 shadow-soft-1">
            <SectionHeader title="Cards" subtitle="Composable info, alerts, and quick links" />
            <View className="gap-3">
              <View className="gap-2 rounded-2xl border border-success-200 bg-success-50 px-4 py-3">
                <Text className="text-base font-semibold text-success-800">Success card</Text>
                <Text className="text-sm text-success-700">
                  Perfect for confirmations, payment success, or onboarding completions.
                </Text>
              </View>
              <View className="gap-2 rounded-2xl border border-warning-200 bg-warning-50 px-4 py-3">
                <Text className="text-base font-semibold text-warning-800">Warning card</Text>
                <Text className="text-sm text-warning-700">
                  Use this pattern to surface important notices that still feel gentle.
                </Text>
              </View>
              <View className="gap-3 rounded-2xl border border-outline-100 bg-background-0 px-4 py-3">
                <View className="flex-row items-center justify-between">
                  <Text className="text-base font-semibold text-typography-900">Quick links</Text>
                  <GSTag label="New" tone="success" />
                </View>
                <View className="flex-row flex-wrap gap-2">
                  <GSChip label="Profile" icon="person-circle-outline" />
                  <GSChip label="Billing" icon="card-outline" />
                  <GSChip label="Support" icon="chatbubbles-outline" />
                </View>
              </View>
            </View>
          </GSCard>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function SettingRow({
  label,
  description,
  value,
  onChange,
  disabled,
  tag,
}: {
  label: string;
  description: string;
  value: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
  tag?: React.ReactNode;
}) {
  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-1 gap-1 pr-3">
        <Text className="text-base font-semibold text-typography-900">{label}</Text>
        <Text className="text-sm text-typography-500">{description}</Text>
      </View>
      {tag ? <View className="mr-2">{tag}</View> : null}
      <Switch
        value={value}
        onValueChange={onChange}
        disabled={disabled}
        thumbColor={value ? '#1E293B' : '#E5E7EB'}
        trackColor={{ false: '#E5E7EB', true: '#A5B4FC' }}
      />
    </View>
  );
}
