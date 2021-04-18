import React from 'react';
import { Story } from '@storybook/react';
import Copyright from '#components/UI/atoms/Copyright';

export default {
  title: 'UI/atoms/Copyright',
  component: Copyright,
};

const Template: Story = args => <Copyright {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: '\u00A92021. Seung Ju PortFolio All rights reserved.',
};