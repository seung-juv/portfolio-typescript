import React from 'react';
import { Story } from '@storybook/react';
import Label from '#components/UI/atoms/Layout/Label';

export default {
  title: 'UI/atoms/Layout/Label',
  component: Label,
};

const Template: Story<React.LabelHTMLAttributes<HTMLLabelElement>> = args => <Label {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: 'Label',
};
