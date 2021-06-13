import React from 'react';
import styled from 'styled-components';
import MainTitle from '#components/Layout/MainTitle';
import Project from '#components/Project';

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
      <Project.List />
    </Container>
  );
};

export default Home;
