import styled from 'styled-components';
import LogoAnimation from '../LogoAnimation';

const Container = styled.div`
  padding-top: 35vh;
  display: flex;
  flex-flow: column nowrap;
  margin: 0 10% 15rem;
  @media screen and (max-width: 1024px) {
    padding-top: 25vh;
  }
`;

const Title = styled.span`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.blackColor};
  height: 2rem;
  overflow: hidden;
  margin: 1rem 0;
`;

const Content = styled.span`
  font-size: 1.2rem;
  font-weight: 300;
  height: 1.4rem;
  overflow: hidden;
  color: ${({ theme }) => theme.lightGreyColor};
`;

const MainTitle = (): React.ReactElement => {
  return (
    <Container>
      <LogoAnimation />
      <Title>Design + Front-end + Back-end</Title>
      <Content>‘Seung Ju’ is creative designer and developer.</Content>
    </Container>
  );
};

export default MainTitle;
