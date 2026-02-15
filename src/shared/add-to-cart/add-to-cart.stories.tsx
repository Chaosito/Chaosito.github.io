import type { Meta, StoryObj } from '@storybook/react';
import { AddToCart } from './add-to-cart';

const meta: Meta<typeof AddToCart> = {
  title: 'Common/AddToCart',
  component: AddToCart,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    count: {
      control: 'number',
      description: 'Количество товара в корзине',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddToCart>;

export const Default: Story = {
  args: {
    count: 0,
  },
};

export const InCart: Story = {
  args: {
    count: 1,
  },
};
