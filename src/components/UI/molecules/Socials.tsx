import { Facebook, Github, GooglePlus, Instagram } from '#components/UI/atoms/Icons';
import { useMemo } from 'react';
import styled from 'styled-components';
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
  const items: SocialItemsType = useMemo(
    () => [
      {
        href: 'https://github.com/kingsky32',
        icon: <Github />,
      },
      {
        href: 'https://www.facebook.com/profile.php?id=100004252961772',
        icon: <Facebook />,
      },
      {
        href: 'https://www.instagram.com/kingsky32',
        icon: <Instagram />,
      },
      {
        href: 'mailto:kingsky32@gmail.com',
        icon: <GooglePlus />,
      },
    ],
    []
  );
  return (
    <Container style={containerStyle}>
      {items?.map(
        (item: SocialProps, index: number): React.ReactElement => (
          <Social key={index} {...item} />
        )
      )}
    </Container>
  );
};

export default Socials;
