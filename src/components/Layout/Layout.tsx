import React from 'react';
import styled from 'styled-components';
import Footer from '#components/Layout/Footer';
import Header from '#components/Layout/Header';
import Menu from '#components/Layout/Menu';
import Providers from '#components/Layout/Providers';
import Button from '#components/Button';
import MenuContext from '#context/MenuContext';

interface LayoutType {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  padding: 15rem 0;
`;

const MenuButton = styled(Button.Menu)`
  position: fixed;
  top: 4.5rem;
  right: 5rem;
  @media screen and (max-width: 1024px) {
    right: 2rem;
  }
`;

const Layout = ({ children }: LayoutType): React.ReactElement => {
  const [isVisibleMenu, setIsVisibleMenu] = React.useState(false);
  const toggleMenu = React.useCallback(() => setIsVisibleMenu(prevState => !prevState), []);

  return (
    <Providers>
      <MenuContext.Provider value={{ isVisible: isVisibleMenu, setIsVisible: setIsVisibleMenu }}>
        <Menu />
        <Wrapper>
          <Header />
          <MenuButton onClick={toggleMenu} isOpen={isVisibleMenu} />
          <main>{children}</main>
          <Footer />
        </Wrapper>
      </MenuContext.Provider>
    </Providers>
  );
};

export default Layout;
