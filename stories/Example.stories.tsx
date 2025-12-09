import React from 'react';
import { Text, View } from 'react-native';

type CardProps = {
  title: string;
  subtitle: string;
};

const meta = {
  title: 'Example/Card',
};

export default meta;

export const Basic = ({ title, subtitle }: CardProps) => (
  <View
    style={{
      padding: 16,
      backgroundColor: '#fff',
      borderRadius: 12,
      gap: 8,
    }}
  >
    <Text style={{ fontSize: 18, fontWeight: '600', color: '#111827' }}>{title}</Text>
    <Text style={{ color: '#4B5563' }}>{subtitle}</Text>
  </View>
);

Basic.args = {
  title: 'Gluestack starter card',
  subtitle: 'Render any RN component inside stories.',
} satisfies CardProps;
