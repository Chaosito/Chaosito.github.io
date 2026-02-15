import type { Meta, StoryObj } from '@storybook/react';
import { CartItem } from './cart-item';
import { createRandomProduct } from '../../homeworks/ts1/3_write';

const meta: Meta<typeof CartItem> = {
  title: 'Common/CartItem',
  component: CartItem,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    name: {
      control: 'text',
    },
    photo: {
      control: 'text',
    },
    onRemove: {
      action: 'removed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PlayStationCart: Story = {
  args: {
    id: '1',
    name: 'Sony Playstation 1',
    photo:
      'https://sonycenter.kz/image/cache/catalog/products/old/PS719999591-Sony-PlayStation-Classic/PS719999591-Sony-PlayStation-Classic-7694-600x600.png',
    createdAt: '2025-02-15',
    price: 5000,
    category: {
      id: '1',
      name: 'Tech',
    },
  },
};

export const RandomProduct: Story = {
  args: createRandomProduct('2024-01-15'),
};
