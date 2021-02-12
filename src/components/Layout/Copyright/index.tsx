import styled from 'styled-components';

const Container = styled.span`
  transform: rotate(270deg);
  color: ${({ theme }) => theme.lightGreyColor};
  font-size: 1.2rem;
  font-weight: 300;
  position: fixed;
  top: 25rem;
  right: -7rem;
  z-index: 50;
  @media screen and (max-width: 1024px) {
    right: -9rem;
  }
  @media screen and (max-width: 425px) {
    display: none;
  }
`;

const Copyright = (): React.ReactElement => {
  return <Container>&copy;2021. Seung Ju PortFolio All rights reserved.</Container>;
};

export default Copyright;
