import React from 'react';

export interface TypographCustomStyleProps {
  color?: string;
  fontSize?: string;
}

export interface TitleProps
  extends TypographCustomStyleProps,
    React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode | string;
}

interface DescriptionProps
  extends TypographCustomStyleProps,
    React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode | string;
}

export interface SubTitleProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    TypographCustomStyleProps {
  children?: React.ReactNode | string;
}

export interface ContactProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactElement | React.ReactNode;
  label: string;
}
