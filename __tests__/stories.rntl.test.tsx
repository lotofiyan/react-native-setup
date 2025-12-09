import React from 'react';
import { render, screen } from '@testing-library/react-native';

import * as ExampleStories from '@/stories/Example.stories';
import * as GSButtonStories from '@/stories/GSButton.stories';

describe('Storybook stories (component render)', () => {
  it('renders Example/Card.Basic with args', () => {
    const Story = ExampleStories.Basic;
    render(<Story {...(Story.args as any)} />);
    expect(screen.getByText(Story.args?.title)).toBeTruthy();
    expect(screen.getByText(Story.args?.subtitle)).toBeTruthy();
  });

  it('renders Buttons/GSButton.Variants with args', () => {
    const Story = GSButtonStories.Variants;
    render(<Story {...(Story.args as any)} />);
    GSButtonStories.Variants.args?.buttons?.forEach(btn => {
      expect(screen.getByText(btn.label)).toBeTruthy();
    });
  });
});
