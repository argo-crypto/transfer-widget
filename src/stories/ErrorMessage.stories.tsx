import type { Meta, StoryObj } from '@storybook/react';

import { ErrorMessage } from '../components/Message/ErrorMessage';

const meta: Meta<typeof ErrorMessage> = {
  component: ErrorMessage,
};

type Story = StoryObj<typeof ErrorMessage>;

export default meta;

export const Default: Story = {
  args: {},
};

export const GasError: Story = {
  args: {
    errorType: 'gas',
  },
};
