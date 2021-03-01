import styled from 'styled-components';

interface ScrollLineProps {
  className?: string;
}

const Container = styled.div`
  width: 1px;
  flex: 1;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.backgroundColor}15;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${({ theme }) => theme.blackColor};
`;

const ScrollLine = ({ className }: ScrollLineProps): React.ReactElement => {
  return (
    <Container className={className} aria-hidden='true'>
      <Line />
    </Container>
  );
};

export default ScrollLine;
