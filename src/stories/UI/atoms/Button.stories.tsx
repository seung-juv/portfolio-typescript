import React from 'react';
import { Story } from '@storybook/react';
import Button, { ButtonProps } from '#components/UI/atoms/Button';

export default {
  title: 'UI/atoms/Button',
  component: Button,
};

const Template: Story<ButtonProps> = args => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};
