import React from 'react';
import { Story } from '@storybook/react';
import Icons from '#components/UI/atoms/Icon';

export default {
  title: 'UI/atoms/Icons',
  component: Icons,
};

export const Logo: Story = args => <Icons.Logo {...args} />;
Logo.args = {
  size: 32,
};

export const Favicon: Story = args => <Icons.Favicon {...args} />;
Favicon.args = {
  size: 3.2,
};

export const Moon: Story = args => <Icons.Moon {...args} />;
Moon.args = {
  size: 3.2,
};

export const Github: Story = args => <Icons.Github {...args} />;
Github.args = {
  size: 3.2,
};

export const Instagram: Story = args => <Icons.Instagram {...args} />;
Instagram.args = {
  size: 3.2,
};

export const GooglePlus: Story = args => <Icons.GooglePlus {...args} />;
GooglePlus.args = {
  size: 3.2,
};

export const Facebook: Story = args => <Icons.Facebook {...args} />;
Facebook.args = {
  size: 3.2,
};

export const Mail: Story = args => <Icons.Mail {...args} />;
Mail.args = {
  size: 3.2,
};

export const Call: Story = args => <Icons.Call {...args} />;
Call.args = {
  size: 3.2,
};

export const ReactIcon: Story = args => <Icons.React {...args} />;
ReactIcon.args = {
  size: 3.2,
};

export const Graphql: Story = args => <Icons.Graphql {...args} />;
Graphql.args = {
  size: 3.2,
};

export const Prisma: Story = args => <Icons.Prisma {...args} />;
Prisma.args = {
  size: 3.2,
};

export const Firebase: Story = args => <Icons.Firebase {...args} />;
Firebase.args = {
  size: 3.2,
};
