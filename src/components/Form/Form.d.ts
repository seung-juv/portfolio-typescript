import React from 'react';

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  children?:
    | React.ReactNode
    | React.ReactElement
    | Array<React.ReactElement | React.ReactNode>
    | string
    | number
    | undefined;
  label?: string | number | undefined;
}
