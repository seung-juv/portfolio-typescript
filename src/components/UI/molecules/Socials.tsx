import React from 'react';
import styled from 'styled-components';
import { Facebook, Github, GooglePlus, Instagram } from '#components/UI/atoms/Layout/Icons';
import Social, { SocialProps } from '../atoms/Social';

type SocialItemsType = Array<SocialProps>;

export interface SocialsProps {
  containerStyle?: React.CSSProperties;
}

const Container = styled.ul`
  display: flex;
  position: relative;
  z-index: 10;
`;

const Socials = ({ containerStyle }: SocialsProps): React.ReactElement => {
  const items: SocialItemsType = React.useMemo(
    () => [
      {
        id: 'github',
        href: 'https://github.com/kingsky32',
        icon: <Github />,
      },
      {
        id: 'facebook',
        href: 'https://www.facebook.com/profile.php?id=100004252961772',
        icon: <Facebook />,
      },
      {
        id: 'instagram',
        href: 'https://www.instagram.com/kingsky32',
        icon: <Instagram />,
      },
      {
        id: 'googleplus',
        href: 'mailto:kingsky32@gmail.com',
        icon: <GooglePlus />,
      },
    ],
    []
  );
  return (
    <Container style={containerStyle}>
      {items?.map(
        (item: SocialProps): React.ReactElement => (
          <Social key={item.id} {...item} />
        )
      )}
    </Container>
  );
};

export default Socials;
