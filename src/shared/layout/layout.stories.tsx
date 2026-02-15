import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from './layout';

const meta: Meta<typeof Layout> = {
  title: 'Common/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    mainContent: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  args: {
    mainContent: 'Page content',
  },
};
