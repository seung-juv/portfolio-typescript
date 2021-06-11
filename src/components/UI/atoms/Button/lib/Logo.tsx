import React from 'react';
import Link from 'next/link';
import Icon from '#components/UI/atoms/Icon';

const Logo = (props: React.HTMLAttributes<HTMLHeadingElement>): React.ReactElement => {
  return (
    <h1 {...props}>
      <Link href='/'>
        <a href='/' aria-label='Seung Ju portfolio'>
          <Icon.Favicon size={4.8} />
        </a>
      </Link>
    </h1>
  );
};

export default Logo;
