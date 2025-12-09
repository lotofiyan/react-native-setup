import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, PressableProps, Text, TextProps, View, ViewProps } from 'react-native';

type Classed<T> = T & { className?: string };

type ButtonProps = Classed<PressableProps> & {
  label: string;
  icon?: keyof typeof Ionicons.glyphMap;
  variant?: 'solid' | 'outline' | 'ghost';
  tone?: 'primary' | 'neutral' | 'success';
  textClassName?: string;
};

export function GSButton({
  label,
  icon,
  variant = 'solid',
  tone = 'primary',
  className = '',
  textClassName = '',
  ...props
}: ButtonProps) {
  const isSolid = variant === 'solid';
  const isOutline = variant === 'outline';
  const toneBg =
    tone === 'success'
      ? 'bg-success-600'
      : tone === 'neutral'
        ? 'bg-background-900'
        : 'bg-primary-600';
  const toneBorder =
    tone === 'success'
      ? 'border-success-400'
      : tone === 'neutral'
        ? 'border-outline-200'
        : 'border-primary-200';
  const buttonClasses = [
    'flex-row items-center justify-center rounded-xl px-4 py-3 gap-2 active:opacity-90',
    isSolid ? toneBg : '',
    isOutline ? `border ${toneBorder}` : '',
    variant === 'ghost' ? '' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  const textColor =
    variant === 'solid'
      ? 'text-white'
      : tone === 'primary'
        ? 'text-primary-700'
        : tone === 'success'
          ? 'text-success-700'
          : 'text-typography-900';
  const iconColor =
    variant === 'solid'
      ? '#FFFFFF'
      : tone === 'primary'
        ? '#1F2937'
        : tone === 'success'
          ? '#166534'
          : '#111827';

  return (
    <Pressable accessibilityRole="button" {...props} className={buttonClasses}>
      {icon ? <Ionicons name={icon} size={18} color={iconColor} /> : null}
      <Text className={`text-base font-semibold ${textColor} ${textClassName}`}>{label}</Text>
    </Pressable>
  );
}

export function GSCard({ className = '', children, ...props }: Classed<ViewProps>) {
  return (
    <View
      {...props}
      className={`rounded-3xl border border-outline-100 bg-background-50 px-4 py-4 ${className}`}>
      {children}
    </View>
  );
}

export function GSTag({
  label,
  tone = 'info',
  className = '',
  ...props
}: Classed<TextProps> & { label: string; tone?: 'success' | 'warning' | 'info' | 'neutral' }) {
  const toneClasses =
    tone === 'success'
      ? 'bg-success-50 text-success-700'
      : tone === 'warning'
        ? 'bg-warning-50 text-warning-700'
        : tone === 'neutral'
          ? 'bg-background-100 text-typography-700'
          : 'bg-info-50 text-info-700';

  return (
    <Text
      {...props}
      className={`self-start rounded-full px-3 py-1 text-xs font-semibold ${toneClasses} ${className}`}>
      {label}
    </Text>
  );
}

export function SectionHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <View className="mb-3 flex-row items-center justify-between">
      <View className="gap-1">
        <Text className="text-lg font-semibold text-typography-900">{title}</Text>
        {subtitle ? <Text className="text-sm text-typography-500">{subtitle}</Text> : null}
      </View>
      {action}
    </View>
  );
}

type ChipProps = Classed<PressableProps> & { label: string; icon?: keyof typeof Ionicons.glyphMap };

export function GSChip({ label, icon, className = '', ...props }: ChipProps) {
  return (
    <Pressable
      accessibilityRole="button"
      {...props}
      className={`flex-row items-center gap-2 rounded-full border border-outline-100 bg-background-0 px-3 py-2 active:opacity-90 ${className}`}>
      {icon ? <Ionicons name={icon} size={16} color="#1F2937" /> : null}
      <Text className="text-sm font-medium text-typography-800">{label}</Text>
    </Pressable>
  );
}

export function StatPill({
  label,
  value,
  delta,
  tone = 'primary',
}: {
  label: string;
  value: string;
  delta?: string;
  tone?: 'primary' | 'success' | 'warning';
}) {
  const accent =
    tone === 'success'
      ? 'text-success-600 bg-success-50'
      : tone === 'warning'
        ? 'text-warning-700 bg-warning-50'
        : 'text-primary-700 bg-primary-50';

  return (
    <View className="rounded-2xl border border-outline-100 bg-background-50 px-4 py-3">
      <Text className="text-sm text-typography-500">{label}</Text>
      <View className="mt-1 flex-row items-end justify-between">
        <Text className="text-2xl font-semibold text-typography-900">{value}</Text>
        {delta ? (
          <Text className={`rounded-full px-2 py-1 text-xs font-semibold ${accent}`}>{delta}</Text>
        ) : null}
      </View>
    </View>
  );
}
