import React from 'react';
import { Story } from '@storybook/react';
import DarkButton from '#components/UI/atoms/Layout/DarkButton';

export default {
  title: 'UI/atoms/Layout/DarkButton',
  component: DarkButton,
};

const Template: Story = args => <DarkButton {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};
