import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { Url } from 'url';

export interface SocialProps {
  href: string | Url;
  icon: React.ReactElement;
  containerStyle?: React.CSSProperties;
}

const Container = styled.li`
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

const Social = ({ href, icon, containerStyle }: SocialProps): React.ReactElement => {
  return (
    <Container style={containerStyle}>
      <Link href={href}>
        <a target='_blank'>{icon}</a>
      </Link>
    </Container>
  );
};

export default Social;
