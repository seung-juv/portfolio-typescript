import React from 'react';
import PC from './lib/PC';
import Mobile from './lib/Mobile';
import { ThumbnailProps } from './Thumbnail';

const Thumbnail = ({ isMobile, ...props }: ThumbnailProps): React.ReactElement => {
  if (isMobile) {
    return <Mobile {...props} />;
  }
  return <PC {...props} />;
};

export default Thumbnail;
