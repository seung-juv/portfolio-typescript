import React from 'react';
import { Story } from '@storybook/react';
import Input from '#components/UI/atoms/Input';

export default {
  title: 'UI/atoms/Input',
  component: Input,
};

const Template: Story<React.InputHTMLAttributes<HTMLInputElement>> = args => <Input {...args} />;
export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
  value: 'Value',
  onChange: () => null,
};
