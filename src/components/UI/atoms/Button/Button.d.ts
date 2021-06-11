import React from 'react';
import { Url } from 'url';
import Button from './index';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export interface SocialProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: Url | string;
  icon: React.ReactElement;
}

export interface NavigationCustomStyleProps {
  opacity?: string;
  color?: string;
}

export interface NavigationProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    NavigationCustomStyleProps {
  href: Url | string;
  children: React.ReactNode | string;
}

export type ButtonType = keyof Button;
