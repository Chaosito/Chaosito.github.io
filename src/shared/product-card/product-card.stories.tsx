import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from './product-card';
import { createRandomProduct } from '../../homeworks/ts1/3_write';

const meta: Meta<typeof ProductCard> = {
  title: 'Common/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: 'text',
    },
    desc: {
      control: 'text',
    },
    price: {
      control: 'number',
    },
    oldPrice: {
      control: 'number',
    },
    photo: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PlayStationProduct: Story = {
  args: {
    id: '1',
    name: 'Sony Playstation 1',
    desc: 'Play hundreds of incredible PS5, PS4 and classic PlayStation games, and discover epic adventures, unique indies, family favorites, and everything in between.',
    price: 5000,
    photo:
      'https://sonycenter.kz/image/cache/catalog/products/old/PS719999591-Sony-PlayStation-Classic/PS719999591-Sony-PlayStation-Classic-7694-600x600.png',
    createdAt: '2025-02-15',
    category: {
      id: '1',
      name: 'Tech',
    },
  },
};

export const RandomProduct: Story = {
  args: createRandomProduct('2024-01-15'),
};
