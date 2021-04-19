import React from 'react';
import { Story } from '@storybook/react';
import MenuButton, { MenuButtonProps } from '#components/UI/atoms/MenuButton';

export default {
  title: 'UI/atoms/MenuButton',
  component: MenuButton,
};

export const Default: Story<MenuButtonProps> = args => <MenuButton {...args} />;
