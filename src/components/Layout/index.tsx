import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import MenuButton from './Menu/MenuButton';
import Providers from './Providers';

interface LayoutType {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  padding: 15rem 0;
`;

const Layout = ({ children }: LayoutType): React.ReactElement => {
  return (
    <Providers>
      <Wrapper>
        <Header />
        <MenuButton />
        <main>{children}</main>
        <Footer />
      </Wrapper>
    </Providers>
  );
};

export default Layout;
