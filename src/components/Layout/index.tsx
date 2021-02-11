interface LayoutType {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutType): React.ReactElement => {
  return (
    <div>
      <main>
        <header></header>
        {children}
        <footer></footer>
      </main>
    </div>
  );
};

export default Layout;
