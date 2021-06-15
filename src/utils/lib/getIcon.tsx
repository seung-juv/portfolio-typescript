import React from 'react';
import Icon from '#components/Icon';

const getIcon = (tool: string, size?: number): React.ReactElement | null => {
  switch (tool) {
    case 'React':
      return <Icon.React size={size} />;
    case 'React-Native':
      return <Icon.React size={size} />;
    case 'GraphQL':
      return <Icon.Graphql size={size} />;
    case 'Prisma':
      return <Icon.Prisma size={size} />;
    case 'Firebase':
      return <Icon.Firebase size={size} />;
    default:
      return null;
  }
};

export default getIcon;
