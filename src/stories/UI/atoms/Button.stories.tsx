import React from 'react';
import { Story } from '@storybook/react';
import Button from '#components/Button';

export default {
  title: 'UI/atoms/Button',
  component: Button,
};

export const Default: Story = args => <Button.Default {...args} />;
Default.args = {
  children: 'Button',
};

export const Navigation: Story = args => <Button.Navigation {...args} />;
Navigation.args = {
  children: 'Navigation',
  fontSize: '1.6rem',
};

export const Dark: Story = args => <Button.Dark {...args} />;
