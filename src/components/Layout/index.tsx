import { RootState } from '#store/store';
import { useCallback, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Header from './Header';

interface LayoutType {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutType): React.ReactElement => {
  const dispatch = useDispatch();
  const darkmode = useSelector((v: RootState) => v.darkmode, shallowEqual);
  const onClick = useCallback(() => {
    console.log(darkmode);
  }, []);
  return (
    <div>
      <main>
        <Header onToggleDarkmode={() => null} />
        <button onClick={onClick}>asdasds</button>
        {children}
        <footer></footer>
      </main>
    </div>
  );
};

export default Layout;
