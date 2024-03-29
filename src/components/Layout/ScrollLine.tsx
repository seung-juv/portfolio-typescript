import { useRouter } from 'next/dist/client/router';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 1px;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.blackColor}15;
`;

const Line = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${({ theme }) => theme.blackColor};
`;

const ScrollLine = (props: React.HTMLAttributes<HTMLDivElement>): React.ReactElement => {
  const [scrollValue, setScrollValue] = React.useState(0);
  const router = useRouter();

  const getScrollValue = React.useCallback(() => {
    const { scrollTop } = document.documentElement;
    const { innerHeight } = window;
    const { scrollHeight } = document.body;

    if (innerHeight >= scrollHeight) {
      setScrollValue(0);
      return;
    }

    const scrollWidth = (scrollTop / (innerHeight - scrollHeight)) * -100 - 100;
    setScrollValue(scrollWidth);
  }, []);

  React.useEffect(() => {
    getScrollValue();
    router.events.on('routeChangeComplete', getScrollValue);
    window.addEventListener('scroll', getScrollValue);
    const unsubscribe = () => {
      window.removeEventListener('scroll', getScrollValue);
    };
    return unsubscribe;
  }, []);

  return (
    <Container aria-hidden='true' {...props}>
      <Line style={{ top: `${scrollValue}%` }} />
    </Container>
  );
};

export default ScrollLine;
