import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OperationCard } from './operation-card';
import { createRandomOperation } from '../../homeworks/ts1/3_write';

const meta: Meta<typeof OperationCard> = {
  title: 'Common/OperationCard',
  component: OperationCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    id: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
    desc: {
      control: 'text',
    },
    createdAt: {
      control: 'text',
    },
    amount: {
      control: 'number',
    },
    category: {
      control: 'object',
    },
    type: {
      control: 'select',
      options: ['Cost', 'Profit'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof OperationCard>;

export const Cost: Story = {
  args: {
    id: '1',
    name: 'Покупка плойки',
    desc: 'Play hundreds of incredible PS5, PS4 and classic PlayStation games, and discover epic adventures, unique indies, family favorites, and everything in between.',
    createdAt: '2025-02-15',
    amount: 550,
    category: {
      id: '1',
      name: 'Tech',
    },
    type: 'Cost',
  },
};

export const Profit: Story = {
  args: {
    id: '2',
    name: 'Продажа плойки',
    desc: 'Play hundreds of incredible PS5, PS4 and classic PlayStation games, and discover epic adventures, unique indies, family favorites, and everything in between.',
    createdAt: '2025-02-15',
    amount: 300,
    category: {
      id: '2',
      name: 'Tech',
    },
    type: 'Profit',
  },
};

export const RandomOp: Story = {
  render: () => {
    const operation = createRandomOperation('2025-02-15');
    return <OperationCard {...operation} />;
  },
};
