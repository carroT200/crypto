import type { Meta, StoryObj } from '@storybook/react';

import Input from '@src/ui-kit/Input/Input';

import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    invalid: false,
    placeholder: 'email',
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
    placeholder: 'email',
  },
};

const InputWithState = () => {
  const [state, setState] = useState<string>('');
  return (
    <Input
      placeholder="password"
      value={state}
      type="password"
      onChange={({ target: { value } }) => setState(value)}
    />
  );
};

export const Password: Partial<Story> = {
  render: () => <InputWithState />,
};
