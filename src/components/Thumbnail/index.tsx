import React from 'react';
import PC from './lib/PC';
import Mobile from './lib/Mobile';
import { ThumbnailProps } from './Thumbnail';
import { PLATFORM_TYPE } from '#common/defines';

const Thumbnail = ({ platform, ...props }: ThumbnailProps): React.ReactElement => {
  if (platform === PLATFORM_TYPE.MOBILE) {
    return <Mobile {...props} />;
  }
  return <PC {...props} />;
};

export default Thumbnail;
