import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Favicon } from './Icons';

interface LogoProps {
  className?: string;
}

const Container = styled.h1``;

const Logo = ({ className }: LogoProps): React.ReactElement => {
  return (
    <Container className={className}>
      <Link href='/'>
        <a href='/' aria-label='Seung Ju portfolio'>
          <Favicon size={4.8} />
        </a>
      </Link>
    </Container>
  );
};

Logo.defaultProps = {
  className: '',
};

export default Logo;
