import styled from 'styled-components';

const Line = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.greyColor};
  text-indent: -999999px;
  position: absolute;
  &:nth-child(1) {
    top: 0;
  }
  &:nth-child(2) {
    top: 0.9rem;
  }
  &:nth-child(3) {
    top: 1.8rem;
  }
`;

const Container = styled.div`
  width: 5rem;
  height: 2.1rem;
  cursor: pointer;
  top: 5rem;
  right: 5rem;
  position: fixed;
  z-index: 50;
  @media screen and (max-width: 1024px) {
    right: 2rem;
  }
`;

const MenuButton = (): React.ReactElement => {
  return (
    <Container>
      <Line>1</Line>
      <Line>2</Line>
      <Line>3</Line>
    </Container>
  );
};

export default MenuButton;
