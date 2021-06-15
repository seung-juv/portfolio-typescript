import Link from 'next/link';
import React from 'react';
import { SocialProps } from '../Button';

const Social = ({ href, icon }: SocialProps): React.ReactElement => {
  return (
    <Link href={href ?? ''}>
      <a>{icon}</a>
    </Link>
  );
};

export default Social;
