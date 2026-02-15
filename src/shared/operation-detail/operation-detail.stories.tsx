import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OperationDetail } from './operation-detail';
import { createRandomOperation } from '../../homeworks/ts1/3_write';

const meta: Meta<typeof OperationDetail> = {
  title: 'Common/OperationDetail',
  component: OperationDetail,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'Уникальный идентификатор операции',
    },
    name: {
      control: 'text',
      description: 'Название операции',
    },
    desc: {
      control: 'text',
      description: 'Описание операции',
    },
    createdAt: {
      control: 'text',
      description: 'Дата создания',
    },
    amount: {
      control: 'number',
      description: 'Сумма операции',
    },
    category: {
      control: 'object',
      description: 'Категория операции',
    },
    type: {
      control: 'select',
      options: ['Cost', 'Profit'],
      description: 'Тип операции',
    },
  },
};

export default meta;
type Story = StoryObj<typeof OperationDetail>;

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
    return <OperationDetail {...operation} />;
  },
};
