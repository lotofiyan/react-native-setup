import React, { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import { GSButton, GSCard, SectionHeader } from "@/components/ui/gs-primitives";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <ScrollView
        className="flex-1 px-4 py-6"
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <View className="gap-4">
          <View className="gap-2">
            <Text className="text-2xl font-semibold text-typography-900">
              Welcome back
            </Text>
            <Text className="text-base text-typography-500">
              Sign in to the gluestack starter kit to continue building.
            </Text>
          </View>

          <GSCard className="gap-4 shadow-soft-1">
            <SectionHeader
              title="Sign in"
              subtitle="Use your email to access the workspace"
            />
            <View className="gap-3">
              <View className="gap-2">
                <Text className="text-sm font-semibold text-typography-700">
                  Email address
                </Text>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="you@example.com"
                  placeholderTextColor="#9CA3AF"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  testID="input-email"
                  className="rounded-xl border border-outline-100 bg-background-0 px-4 py-3 text-base text-typography-900"
                />
              </View>
              <View className="gap-2">
                <View className="flex-row items-center justify-between">
                  <Text className="text-sm font-semibold text-typography-700">
                    Password
                  </Text>
                  <Pressable onPress={() => router.push("/auth/reset")}>
                    <Text className="text-sm font-semibold text-primary-700">
                      Forgot?
                    </Text>
                  </Pressable>
                </View>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="••••••••"
                  secureTextEntry
                  placeholderTextColor="#9CA3AF"
                  className="rounded-xl border border-outline-100 bg-background-0 px-4 py-3 text-base text-typography-900"
                />
              </View>
              <GSButton
                onPress={() => router.push("/")}
                label="Sign in"
                testID="sign-in"
                icon="log-in-outline"
              />
              <View className="flex-row items-center justify-center gap-2">
                <Text className="text-sm text-typography-600">
                  Need an account?
                </Text>
                <Pressable onPress={() => router.push("/auth/register")}>
                  <Text className="text-sm font-semibold text-primary-700">
                    Create one
                  </Text>
                </Pressable>
              </View>
            </View>
          </GSCard>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
