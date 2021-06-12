import React from 'react';
import { Story } from '@storybook/react';
import Icon from '#components/UI/atoms/Icon';

export default {
  title: 'UI/atoms/Icon',
  component: Icon,
};

export const Logo: Story = args => <Icon.Logo {...args} />;
Logo.args = {
  size: 32,
};

export const Favicon: Story = args => <Icon.Favicon {...args} />;
Favicon.args = {
  size: 3.2,
};

export const Moon: Story = args => <Icon.Moon {...args} />;
Moon.args = {
  size: 3.2,
};

export const Github: Story = args => <Icon.Github {...args} />;
Github.args = {
  size: 3.2,
};

export const Instagram: Story = args => <Icon.Instagram {...args} />;
Instagram.args = {
  size: 3.2,
};

export const GooglePlus: Story = args => <Icon.GooglePlus {...args} />;
GooglePlus.args = {
  size: 3.2,
};

export const Facebook: Story = args => <Icon.Facebook {...args} />;
Facebook.args = {
  size: 3.2,
};

export const Mail: Story = args => <Icon.Mail {...args} />;
Mail.args = {
  size: 3.2,
};

export const Call: Story = args => <Icon.Call {...args} />;
Call.args = {
  size: 3.2,
};

export const ReactIcon: Story = args => <Icon.React {...args} />;
ReactIcon.args = {
  size: 3.2,
};

export const Graphql: Story = args => <Icon.Graphql {...args} />;
Graphql.args = {
  size: 3.2,
};

export const Prisma: Story = args => <Icon.Prisma {...args} />;
Prisma.args = {
  size: 3.2,
};

export const Firebase: Story = args => <Icon.Firebase {...args} />;
Firebase.args = {
  size: 3.2,
};
