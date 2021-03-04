import React from 'react';
import styled from 'styled-components';
import MenuButton from '#components/UI/atoms/MenuButton.tsx';
import Providers from '#components/UI/molecules/Providers.tsx';
import Footer from '#components/UI/organisms/Footer.tsx';
import Header from '#components/UI/organisms/Header.tsx';
import Menu from '#components/templates/Menu.tsx';

interface LayoutType {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  padding: 15rem 0;
`;

const Layout = ({ children }: LayoutType): React.ReactElement => {
  const [isVisibleMenu, setIsVisibleMenu] = React.useState(false);
  const toggleMenu = React.useCallback(() => setIsVisibleMenu(prevState => !prevState), []);
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
