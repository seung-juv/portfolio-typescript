import React from 'react';
import styled from 'styled-components';

export interface ScrollLineProps {
  className?: string;
}

const Container = styled.div`
  width: 1px;
  flex: 1;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.blackColor}15;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Line = styled.span<{ scrollValue: number }>`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${({ theme }) => theme.blackColor};
  top: ${({ scrollValue }) => scrollValue - 100}%;
`;

const ScrollLine = ({ className }: ScrollLineProps): React.ReactElement => {
  const [scrollValue, setScrollValue] = React.useState(0);
  const getScrollValue = React.useCallback(() => {
    const scrollPosition = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.scrollHeight;
    const scrollWidth = (scrollPosition / (windowHeight - fullHeight)) * -100;
    setScrollValue(scrollWidth);
  }, []);

  React.useEffect(() => {
    const unsubscribe = window.addEventListener('scroll', getScrollValue);
    return unsubscribe;
  }, []);

  return (
    <Container className={className} aria-hidden='true'>
      <Line scrollValue={scrollValue} />
    </Container>
  );
};

ScrollLine.defaultProps = {
  className: '',
};

export default ScrollLine;
