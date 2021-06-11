import React from 'react';
import Link from 'next/link';
import { SocialProps } from '../Button';

const Social = ({ href, icon, ...props }: SocialProps): React.ReactElement => (
  <Link href={href}>
    <a target='_sub' {...props}>
      {icon}
    </a>
  </Link>
);

export default Social;
