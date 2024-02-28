import type { Meta, StoryObj } from '@storybook/react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MenuNavLink from '@src/ui-kit/MenuNavLink/MenuNavLink';

const meta = {
  title: 'Example/MenuNavlink',
  component: MenuNavLink,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Routes>
          <Route path="/profile" />
          <Route path="/applications" />
          <Route path="/notifications" />
          <Route path="/support" />
          <Route path="/logout" />
        </Routes>
        <Story />
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MenuNavLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Large: Partial<Story> = {
  render: () => (
    <>
      <MenuNavLink to="/profile">Profile</MenuNavLink>
      <MenuNavLink to="/applications">Applications</MenuNavLink>
      <MenuNavLink to="/notifications">Notifications</MenuNavLink>
      <MenuNavLink to="/support">Support</MenuNavLink>
      <MenuNavLink to="/logout">Logout</MenuNavLink>
    </>
  ),
};
