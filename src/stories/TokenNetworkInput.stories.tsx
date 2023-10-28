import type { Meta, StoryObj } from '@storybook/react';
import { TokenNetworkInput } from '../components/widget/TokenNetworkInput';
import { SupportedChains, SupportedTokens } from '../models/dummy';
const meta: Meta<typeof TokenNetworkInput> = {
  component: TokenNetworkInput,
};

type Story = StoryObj<typeof TokenNetworkInput>;

export default meta;

export const Primary: Story = {
  args: {
    direction: 'from',
  },
};

export const Selected: Story = {
  args: {
    direction: 'to',
    estimateTransferValue: '1.7',
    chain: SupportedChains[0],
    token: SupportedTokens[0],
  },
};