import React from 'react';
import styled from 'styled-components';
import MainTitle from '#components/UI/organisms/MainTitle.tsx';
import MainProjects from '#components/UI/organisms/MainProjects.tsx';

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
      <MainProjects />
    </Container>
  );
};

export default Home;
