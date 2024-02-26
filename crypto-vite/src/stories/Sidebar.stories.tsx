import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import Sidebar from '@src/ui-kit/Sidebar/Sidebar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Sidebar',
  component: Sidebar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

const SidebarWithState = () => {
  const [open, onOpenChange] = useState<boolean>(false);

  const onModalChange = () => {
    onOpenChange((prev) => !prev);
  };

  return (
    <>
      <button onClick={onModalChange}>Xd</button>
      <Sidebar open={open} onOpenChange={onModalChange}>
        <div>
          <button
            type="submit"
            onClick={onModalChange}
            style={{ position: 'absolute', top: 24, right: 24 }}
          >
            X
          </button>
          <p style={{ width: 300 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            omnis veniam soluta eos corporis, tempora aut facilis quasi odit
            sapiente asperiores id ullam nulla ducimus ipsa voluptatem voluptas.
            Vero, sint!
          </p>
        </div>
      </Sidebar>
    </>
  );
};

export const Primary: Partial<Story> = {
  render: () => <SidebarWithState />,
};
