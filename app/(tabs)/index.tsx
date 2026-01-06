import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

import {
  GSButton,
  GSCard,
  GSChip,
  GSTag,
  SectionHeader,
  StatPill,
} from "@/components/ui/gs-primitives";

const quickActions = [
  { label: "Preview components", icon: "grid", route: "/(tabs)/explore" },
  {
    label: "View profile",
    icon: "person-circle-outline",
    route: "/(tabs)/profile",
  },
  {
    label: "Auth flows",
    icon: "log-in-outline",
    route: "/auth/login",
    id: "cta-go-to-auth",
  },
];

const flows = [
  {
    title: "Auth screens",
    badge: "Complete",
    tone: "success" as const,
    description:
      "Sign in, sign up, password reset, and OTP variations built with gluestack tokens.",
  },
  {
    title: "Dashboard blocks",
    badge: "In progress",
    tone: "warning" as const,
    description:
      "Cards, stats, CTA banners, and activity strips ready for reuse.",
  },
  {
    title: "Settings & profile",
    badge: "Ready",
    tone: "info" as const,
    description:
      "Account summary, toggles, notification preferences, and support shortcuts.",
  },
];

export default function HomeScreen() {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <ScrollView
        className="flex-1 px-4 py-5"
        contentContainerStyle={{
          paddingBottom: 32,
        }}
        testID="home-scroll"
      >
        <View className="gap-5">
          <View className="flex-row items-center justify-between">
            <View className="gap-1">
              <Text
                testID="home-title"
                className="text-2xl font-semibold text-typography-900"
              >
                Gluestack Starter
              </Text>
              <Text className="text-base text-typography-500">
                Staging mode
              </Text>
              <Text className="text-base font-semibold text-typography-500">
                Curated screens ready
              </Text>
            </View>
            <View className="h-12 w-12 items-center justify-center rounded-2xl bg-primary-600 shadow-hard-2">
              <Ionicons name="sparkles" size={22} color="#fff" />
            </View>
          </View>
          <GSCard className="gap-3 border-primary-400 bg-primary-600 shadow-soft-2">
            <GSTag
              label="Build faster"
              tone="neutral"
              className="border border-white/20 bg-white/10 text-white"
            />
            <Text className="text-xl font-semibold text-white">
              Drop in gluestack UI patterns for a polished app shell.
            </Text>
            <Text className="text-base text-white/80">
              Ship with pre-styled hero, stats, cards, and settings blocks that
              inherit your theme.
            </Text>
            <View className="mt-2 flex-row gap-3">
              <GSButton
                label="Browse components"
                variant="outline"
                textClassName="text-white"
                className="border-white/50 bg-white/10"
                testID="cta-browse-components"
                onPress={() => router.push("/(tabs)/explore")}
              />
              <GSButton
                label="View profile"
                variant="ghost"
                tone="neutral"
                className="bg-white"
                textClassName="text-primary-700"
                onPress={() => router.push("/(tabs)/profile")}
              />
            </View>
          </GSCard>
          <View>
            <SectionHeader
              title="Snapshot"
              subtitle="Quick glance at the starter modules"
              action={
                <GSTag
                  label="Up to date"
                  tone="success"
                  className="border border-success-200 bg-success-50"
                />
              }
            />
            <View className="flex-row flex-wrap gap-3">
              <View className="w-[48%] flex-1">
                <StatPill label="Components" value="18" delta="+4 this week" />
              </View>
              <View className="w-[48%] flex-1">
                <StatPill
                  label="Flows"
                  value="6"
                  tone="success"
                  delta="QA passed"
                />
              </View>
              <View className="w-[48%] flex-1">
                <StatPill
                  label="Themes"
                  value="Light & Dark"
                  tone="warning"
                  delta="Adaptive"
                />
              </View>
            </View>
          </View>
          <View className="">
            <GSButton
              label="Toggle theme"
              icon="eye"
              variant="outline"
              onPress={() =>
                setColorScheme(colorScheme === "dark" ? "light" : "dark")
              }
            />
          </View>
          <View className="">
            <GSButton
              label="Open Storybook"
              icon="book"
              variant="solid"
              onPress={() => router.push("/storybook")}
            />
          </View>

          <View className="gap-3">
            <SectionHeader
              title="Quick actions"
              subtitle="Jump into popular starter pages"
              action={
                <Ionicons name="arrow-forward" size={18} color="#1F2937" />
              }
            />
            <View className="flex-row flex-wrap gap-2">
              {quickActions.map((action) => (
                <GSChip
                  key={action.label}
                  icon={action.icon as keyof typeof Ionicons.glyphMap}
                  label={action.label}
                  testID={action?.id}
                  onPress={() => router.push(action.route)}
                />
              ))}
            </View>
          </View>
          <View className="gap-3">
            <SectionHeader
              title="Starter flows"
              subtitle="Preview how the gluestack kit looks in-app"
            />
            {flows.map((flow) => (
              <GSCard key={flow.title} className="gap-3">
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-semibold text-typography-900">
                    {flow.title}
                  </Text>
                  <GSTag label={flow.badge} tone={flow.tone} />
                </View>
                <Text className="text-base text-typography-500">
                  {flow.description}
                </Text>
                <View className="flex-row gap-2">
                  <GSButton
                    label="Preview"
                    icon="eye"
                    variant="outline"
                    onPress={() => router.push("/(tabs)/explore")}
                  />
                  <GSButton
                    label="Use"
                    icon="arrow-forward"
                    onPress={() => router.push("/(tabs)/profile")}
                  />
                </View>
              </GSCard>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
