import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { GSButton, GSCard, GSChip, GSTag, SectionHeader } from '@/components/ui/gs-primitives';

const preferences = [
  { label: 'Notifications', value: 'Enabled', tone: 'success' as const },
  { label: 'Security', value: 'Face ID', tone: 'info' as const },
  { label: 'Theme', value: 'Adaptive', tone: 'info' as const },
];

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <ScrollView
        className="flex-1 px-4 py-5"
        contentContainerStyle={{
          paddingBottom: 32,
        }}>
        <View className="gap-4">
          <View className="flex-row items-center justify-between">
            <View className="gap-1">
              <Text className="text-2xl font-semibold text-typography-900">Profile & settings</Text>
              <Text className="text-base text-typography-500">
                Manage the starter kit preferences and account state.
              </Text>
            </View>
            <View className="h-12 w-12 items-center justify-center rounded-2xl bg-primary-600 shadow-hard-2">
              <Ionicons name="person" size={22} color="#fff" />
            </View>
          </View>

          <GSCard className="gap-4 shadow-soft-1">
            <View className="flex-row items-center gap-3">
              <View className="h-14 w-14 items-center justify-center rounded-2xl bg-background-900">
                <Text className="text-xl font-semibold text-white">JT</Text>
              </View>
              <View className="flex-1 gap-1">
                <Text className="text-lg font-semibold text-typography-900">Jordan Taylor</Text>
                <Text className="text-sm text-typography-500">Product Designer • Starter kit</Text>
              </View>
              <GSTag label="Pro" tone="success" />
            </View>
            <View className="flex-row flex-wrap gap-3">
              {preferences.map(pref => (
                <View
                  key={pref.label}
                  className="flex-row items-center gap-2 rounded-full border border-outline-100 bg-background-0 px-3 py-2">
                  <Ionicons
                    name={pref.tone === 'success' ? 'shield-checkmark' : 'sparkles'}
                    size={16}
                    color="#1F2937"
                  />
                  <Text className="text-sm font-semibold text-typography-900">{pref.label}</Text>
                  <GSTag label={pref.value} tone={pref.tone} />
                </View>
              ))}
            </View>
            <View className="flex-row gap-2">
              <GSButton label="Edit profile" icon="create-outline" variant="outline" />
              <GSButton label="Upgrade" icon="star" />
            </View>
          </GSCard>

          <GSCard className="gap-4 shadow-soft-1">
            <SectionHeader title="Workspace" subtitle="Projects, roles, and access" />
            <View className="gap-3">
              <Row label="Team" value="Design + Mobile" icon="people-circle-outline" />
              <Row label="Role" value="Owner" icon="shield-checkmark-outline" />
              <Row label="Environment" value="QA" icon="speedometer-outline" />
            </View>
            <View className="flex-row flex-wrap gap-2">
              <GSChip label="Invite teammate" icon="person-add-outline" />
              <GSChip label="Switch workspace" icon="swap-horizontal-outline" />
            </View>
          </GSCard>

          <GSCard className="gap-4 shadow-soft-1">
            <SectionHeader title="Support" subtitle="Shortcuts for common tasks" />
            <View className="gap-3">
              <View className="flex-row items-center gap-3 rounded-2xl border border-info-200 bg-info-50 px-4 py-3">
                <View className="h-10 w-10 items-center justify-center rounded-xl bg-white/80">
                  <Ionicons name="chatbubbles" size={18} color="#2563EB" />
                </View>
                <View className="flex-1 gap-1">
                  <Text className="text-base font-semibold text-typography-900">Talk to us</Text>
                  <Text className="text-sm text-typography-600">
                    Need another starter flow? Tell us and we will scaffold it.
                  </Text>
                </View>
              </View>
              <View className="flex-row gap-2">
                <GSButton label="Docs" icon="book-outline" variant="outline" />
                <GSButton label="Send feedback" icon="paper-plane-outline" />
              </View>
            </View>
          </GSCard>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Row({ label, value, icon }: { label: string; value: string; icon: keyof typeof Ionicons.glyphMap }) {
  return (
    <View className="flex-row items-center justify-between rounded-2xl border border-outline-100 bg-background-0 px-3 py-3">
      <View className="flex-row items-center gap-3">
        <View className="h-10 w-10 items-center justify-center rounded-xl bg-background-100">
          <Ionicons name={icon} size={18} color="#1F2937" />
        </View>
        <Text className="text-base font-semibold text-typography-900">{label}</Text>
      </View>
      <Text className="text-sm font-semibold text-typography-500">{value}</Text>
    </View>
  );
}
