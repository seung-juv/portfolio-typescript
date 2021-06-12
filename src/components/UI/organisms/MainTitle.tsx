import React from 'react';
import styled from 'styled-components';
import Icon from '../atoms/Icon';

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
  line-height: initial;
  overflow: hidden;
  margin: 1rem 0 0.8rem;
`;

const Content = styled.span`
  font-size: 1.2rem;
  line-height: initial;
  font-weight: 300;
  overflow: hidden;
  color: ${({ theme }) => theme.lightGreyColor};
`;

const MainTitle = (): React.ReactElement => {
  return (
    <Container>
      <Icon.Logo size={3.2} />
      <Title>Design + Front-end + Back-end</Title>
      <Content>‘Seung Ju’ is creative design and develop.</Content>
    </Container>
  );
};

export default MainTitle;
