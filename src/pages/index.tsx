import React from 'react';
import styled from 'styled-components';
import MainTitle from '#components/Layout/MainTitle';
import Project from '#components/Project';
import Button from '#components/Button';
import Contacts from '#components/Layout/Contacts';

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

const TitleContainer = styled.section`
  padding: 35vh 10% 15rem;
  @media screen and (max-width: 1024px) {
    padding-top: 25vh;
  }
`;

const ProjectContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 20rem;
`;

const MoreButton = styled(Button.Link)`
  margin-top: 20rem;
  align-self: center;
`;

const ContactsContainer = styled.section`
  max-width: 60rem;
  margin: 0 auto;
`;

const Home = (): React.ReactElement => {
  return (
    <Container>
      <TitleContainer>
        <MainTitle />
      </TitleContainer>
      <ProjectContainer>
        <Project.List />
        <MoreButton href='/works'>MORE</MoreButton>
      </ProjectContainer>
      <ContactsContainer>
        <Contacts />
      </ContactsContainer>
    </Container>
  );
};

export default Home;
