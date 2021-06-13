import React from 'react';
import styled from 'styled-components';
import Icon from '#components/Icon';
import Typograph from '#components/Typograph';

const Container = styled.div`
  padding-top: 35vh;
  display: flex;
  flex-flow: column nowrap;
  margin: 0 10% 15rem;
  @media screen and (max-width: 1024px) {
    padding-top: 25vh;
  }
`;

const Title = styled(Typograph.Title)`
  color: ${({ theme }) => theme.blackColor};
  font-size: 1.6rem;
  margin: 1rem 0 0.8rem;
`;

const Content = styled(Typograph.Caption)`
  font-size: 1.2rem;
  font-weight: 300;
`;

const MainTitle = (): React.ReactElement => {
  return (
    <Container>
      <Icon.Logo size={20} />
      <Title>Design + Front-end + Back-end</Title>
      <Content>‘Seung Ju’ is creative design and develop.</Content>
    </Container>
  );
};

export default MainTitle;
