import Link from 'next/link';
import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Url } from 'url';
import Icon from '#components/Icon';

interface SocialProps extends HTMLAttributes<HTMLLIElement> {
  href?: Url | string;
  icon: React.ReactNode | React.ReactElement;
}

type SocialItemsType = Array<SocialProps>;

export interface SocialsProps {
  containerStyle?: React.CSSProperties;
}

const Container = styled.ul`
  display: flex;
  position: relative;
  z-index: 10;
`;

const Social = ({ href, icon }: SocialProps): React.ReactElement => {
  return (
    <Link href={href ?? ''}>
      <a>{icon}</a>
    </Link>
  );
};

const Socials = (props: HTMLAttributes<HTMLUListElement>): React.ReactElement => {
  const items: SocialItemsType = React.useMemo(
    () => [
      {
        id: 'github',
        href: 'https://github.com/kingsky32',
        icon: <Icon.Github />,
      },
      {
        id: 'facebook',
        href: 'https://www.facebook.com/profile.php?id=100004252961772',
        icon: <Icon.Facebook />,
      },
      {
        id: 'instagram',
        href: 'https://www.instagram.com/kingsky32',
        icon: <Icon.Instagram />,
      },
      {
        id: 'googleplus',
        href: 'mailto:kingsky32@gmail.com',
        icon: <Icon.GooglePlus />,
      },
    ],
    []
  );
  return (
    <Container {...props}>
      {items?.map(
        (item: SocialProps, index: number): React.ReactElement => (
          <Social key={item.id ?? index} {...item} />
        )
      )}
    </Container>
  );
};

export default Socials;
