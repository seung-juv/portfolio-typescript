import React from 'react';
import { Story } from '@storybook/react';
import * as Icons from '#components/UI/atoms/Layout/Icons';

export default {
  title: 'UI/atoms/Layout/Icons',
  component: Icons,
};

export const Logo: Story = args => <Icons.Logo {...args} />;

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

export const ReactIcon: Story = args => <Icons.ReactIcon {...args} />;
ReactIcon.args = {
  size: 3.2,
};

export const Graphql: Story = args => <Icons.Graphql {...args} />;
Graphql.args = {
  size: 3.2,
};

export const PrismaIcon: Story = args => <Icons.PrismaIcon {...args} />;
PrismaIcon.args = {
  size: 3.2,
};

export const FirebaseIcon: Story = args => <Icons.FirebaseIcon {...args} />;
FirebaseIcon.args = {
  size: 3.2,
};
