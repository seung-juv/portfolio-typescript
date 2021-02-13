import styled from 'styled-components';

const Container = styled.div`
  width: 1px;
  flex: 1;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.backgroundColor}15;
  margin-bottom: 3rem;
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

const ScrollLine = () => {
  return (
    <Container>
      <Line />
    </Container>
  );
};

export default ScrollLine;
