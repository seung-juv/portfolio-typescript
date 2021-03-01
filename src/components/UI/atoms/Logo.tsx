import Link from 'next/link';
import styled from 'styled-components';
import { Favicon } from './Icons';

const Container = styled.h1`
  margin-bottom: 3rem;
`;

const Logo = (): React.ReactElement => {
  return (
    <Container>
      <Link href='/'>
        <a>
          <Favicon size={4.8} />
        </a>
      </Link>
    </Container>
  );
};

export default Logo;
