import React from 'react';
import styled from 'styled-components';
import Icon from '#components/Icon';
import Button from '#components/Button';
import { SocialProps } from '#components/Button/Button';

type SocialItemsType = Array<SocialProps>;

export interface SocialsProps {
  containerStyle?: React.CSSProperties;
}

const Container = styled.ul`
  display: flex;
  position: relative;
  z-index: 10;
`;

const Social = styled.li`
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

const Socials = (props: React.HTMLAttributes<HTMLUListElement>): React.ReactElement => {
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
          <Social>
            <Button.Social key={item.id ?? index} {...item} />
          </Social>
        )
      )}
    </Container>
  );
};

export default Socials;
