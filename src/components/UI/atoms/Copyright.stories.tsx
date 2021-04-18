import React from 'react';
import { Story } from '@storybook/react';
import Copyright from './Copyright';

export default {
  title: 'Copyright',
  component: Copyright,
};

const Template: Story = args => <Copyright {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};
