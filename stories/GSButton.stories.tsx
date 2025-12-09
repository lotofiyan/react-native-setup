import React from 'react';
import { View } from 'react-native';

import { GSButton } from '@/components/ui/gs-primitives';

type ButtonStoryProps = React.ComponentProps<typeof GSButton>;

const meta = {
  title: 'Buttons/GSButton',
  component: GSButton,
};

export default meta;

export const Variants = (args: { buttons: ButtonStoryProps[] }) => (
  <View style={{ padding: 16, gap: 12, backgroundColor: '#F9FAFB' }}>
    {args.buttons.map(btn => (
      <GSButton key={btn.label} {...btn} />
    ))}
  </View>
);

Variants.args = {
  buttons: [
    { label: 'Primary', icon: 'flash' },
    { label: 'Success', icon: 'checkmark-circle', tone: 'success' as const },
    { label: 'Outline', icon: 'color-wand', variant: 'outline' as const },
    { label: 'Ghost', icon: 'ellipse-outline', variant: 'ghost' as const },
  ],
} satisfies { buttons: ButtonStoryProps[] };
