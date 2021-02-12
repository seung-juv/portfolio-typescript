import Copyright from './Copyright';
import Header from './Header';
import MenuButton from './MenuButton';

interface LayoutType {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutType): React.ReactElement => {
  return (
    <div>
      <Header />
      <MenuButton />
      <main>
        {children}
        <footer></footer>
      </main>
      <Copyright />
    </div>
  );
};

export default Layout;
