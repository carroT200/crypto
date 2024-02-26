import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import Dialog from '@src/ui-kit/Dialog/Dialog';

const meta = {
  title: 'Example/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

const DialogWithState = () => {
  const [open, setOpen] = useState<boolean>(false);

  const onModalChange = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <button onClick={onModalChange}>Click</button>
      <Dialog open={open} onOpenChange={setOpen}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          unde. Sequi eaque fuga ratione nihil possimus iure alias sapiente
          numquam earum at repudiandae ab impedit quaerat, neque sint suscipit
          provident!
        </p>
      </Dialog>
    </div>
  );
};

export const Primary: Partial<Story> = {
  render: () => <DialogWithState />,
};
