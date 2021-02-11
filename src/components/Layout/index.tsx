import Header from './Header';

interface LayoutType {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutType): React.ReactElement => {
  return (
    <div>
      <main>
        <Header onToggleDarkmode={() => null} />
        {children}
        <footer></footer>
      </main>
    </div>
  );
};

export default Layout;
