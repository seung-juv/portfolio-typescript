import React from 'react';
import styled from 'styled-components';
import Footer from '#components/Layout/Footer';
import Header from '#components/Layout/Header';
import Menu from '#components/templates/Menu';
import MenuButton from '#components/Layout/MenuButton';
import Providers from '#components/Layout/Providers';

interface LayoutType {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  padding: 15rem 0;
`;

const EMenuButton = styled(MenuButton)`
  position: fixed;
  right: 5rem;
  top: 4rem;
`;

const Layout = ({ children }: LayoutType): React.ReactElement => {
  const [isVisibleMenu, setIsVisibleMenu] = React.useState(false);
  const toggleMenu = React.useCallback(() => setIsVisibleMenu(prevState => !prevState), []);

  return (
    <Providers>
      <Menu isVisible={isVisibleMenu} />
      <Wrapper>
        <Header />
        <EMenuButton onClick={toggleMenu} isOpen={isVisibleMenu} />
        <main>{children}</main>
        <Footer />
      </Wrapper>
    </Providers>
  );
};

export default Layout;
