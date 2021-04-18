import React from 'react';
import Button from './Button';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default {
  title: 'Button',
  component: Button,
};

const Template = (args: ButtonProps): React.ReactElement => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};
