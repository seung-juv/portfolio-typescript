import React from 'react';
import { Url } from 'url';
import Button from './index';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export interface NavigationCustomStyleProps {
  opacity?: string;
  color?: string;
  fontSize?: string | number;
  fontWeight?: string | number;
}

export interface NavigationProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    NavigationCustomStyleProps {
  href?: Url | string;
  label?: React.ReactNode | string;
}

export type ButtonType = keyof Button;

export interface MenuButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isOpen: boolean;
}

export interface SocialProps extends React.HTMLAttributes<HTMLLIElement> {
  href?: Url | string;
  icon: React.ReactNode | React.ReactElement;
}
