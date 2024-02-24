import type { Meta, StoryObj } from '@storybook/react';

import Button from '@src/ui-kit/Button/Button';

const meta = {
  title: 'Examle/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Click',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'click',
    variant: 'secondary',
  },
};
