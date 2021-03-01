import MenuButton from '#components/UI/atoms/MenuButton';
import Providers from '#components/UI/molecules/Providers';
import Footer from '#components/UI/organisms/Footer';
import Header from '#components/UI/organisms/Header';
import Menu from '#components/UI/organisms/Menu';
import { useCallback, useState } from 'react';
import styled from 'styled-components';

interface LayoutType {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  padding: 15rem 0;
`;

const Layout = ({ children }: LayoutType): React.ReactElement => {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);
  const toggleMenu = useCallback(() => setIsVisibleMenu(prevState => !prevState), []);
  return (
    <Providers>
      {isVisibleMenu ? <Menu /> : null}
      <Wrapper>
        <Header />
        <MenuButton onClick={toggleMenu} />
        <main>{children}</main>
        <Footer />
      </Wrapper>
    </Providers>
  );
};

export default Layout;