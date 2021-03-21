import React from 'react';
import { Router } from 'next/dist/client/router';
import styled from 'styled-components';
import MenuButton from '#components/UI/atoms/MenuButton';
import Providers from '#components/UI/molecules/Providers';
import Footer from '#components/UI/organisms/Footer';
import Header from '#components/UI/organisms/Header';
import Menu from '#components/templates/Menu';

interface LayoutType {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  padding: 15rem 0;
`;

const Layout = ({ children }: LayoutType): React.ReactElement => {
  const [isVisibleMenu, setIsVisibleMenu] = React.useState(false);
  const toggleMenu = React.useCallback(() => setIsVisibleMenu(prevState => !prevState), []);
  React.useEffect(() => {
    Router.events.on('routeChangeComplete', (): void => {
      setIsVisibleMenu(false);
    });
  }, []);
  return (
    <Providers>
      {isVisibleMenu ? <Menu /> : null}
      <Wrapper>
        <Header />
        <MenuButton onClick={toggleMenu} isOpen={isVisibleMenu} />
        <main>{children}</main>
        <Footer />
      </Wrapper>
    </Providers>
  );
};

export default Layout;
