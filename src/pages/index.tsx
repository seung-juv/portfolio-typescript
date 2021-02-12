import MainTitle from '#components/Home/MainTitle';
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

const Home = (): React.ReactElement => {
  return (
    <Container>
      <MainTitle />
    </Container>
  );
};

export default Home;
