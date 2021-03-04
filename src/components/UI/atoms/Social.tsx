import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

export interface SocialProps {
  id: string | number;
  href: string;
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
        <a href={href} target='_sub'>
          {icon}
        </a>
      </Link>
    </Container>
  );
};

export default Social;
