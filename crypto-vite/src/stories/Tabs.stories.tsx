import type { Meta, StoryObj } from '@storybook/react';

import { FC, useState } from 'react';

import {
  TabsRoot,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@src/ui-kit/Tabs/Tabs';

const meta = {
  title: 'Example/Tabs',
  component: TabsRoot,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TabsRoot>;

export default meta;

type Story = StoryObj<typeof meta>;

const TabsState: FC = () => {
  const [state, setState] = useState<string>('write-an-appeal');
  return (
    <TabsRoot value={state} onValueChange={setState}>
      <TabsList>
        <TabsTrigger value="tickets">Tickets</TabsTrigger>
        <TabsTrigger value="write-an-appeal">Write an Appeal</TabsTrigger>
      </TabsList>
      <TabsContent value="tickets">hello wor</TabsContent>
      <TabsContent value="write-an-appeal">Write an Appeal</TabsContent>
    </TabsRoot>
  );
};

export const Primary: Partial<Story> = {
  render: () => <TabsState />,
};
