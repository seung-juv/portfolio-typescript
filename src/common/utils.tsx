import React from 'react';
import { ReactIcon, Graphql, PrismaIcon, FirebaseIcon } from '#components/UI/atoms/Icon';

export const getIcon = (tool: string, size?: number): React.ReactElement | null => {
  switch (tool) {
    case 'React':
      return <ReactIcon size={size} />;
    case 'React-Native':
      return <ReactIcon size={size} />;
    case 'GraphQL':
      return <Graphql size={size} />;
    case 'Prisma':
      return <PrismaIcon size={size} />;
    case 'Firebase':
      return <FirebaseIcon size={size} />;
    default:
      return null;
  }
};
