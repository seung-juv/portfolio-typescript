import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    width: 70%;
  }
  @media screen and (max-width: 425px) {
    width: 90%;
  }
`;

const Title = styled.h2`
  font-size: 5.8rem;
  font-weight: bold;
  margin-bottom: 3.5rem;
`;

const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

const ProfilePicture = styled.div`
  width: 60%;
  @media screen and (max-width: 1440px) {
    width: 85%;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const Picture = styled.img`
  width: 100%;
`;

const ContentContainer = styled.div`
  width: 60%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 4.5rem 5rem;
  position: relative;
  align-self: flex-end;
  bottom: 20rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 5rem 0;
    bottom: 0;
  }
`;

const ContentTitle = styled.h5`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.blackColor};
`;

const ContentSubTitle = styled.small`
  font-size: 1.1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.lightGreyColor};
`;

const Content = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 2;
  color: ${({ theme }) => theme.blackColor};
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
`;

const About = (): React.ReactElement => {
  return (
    <Container>
      <Title>About</Title>
      <ProfileContainer>
        <ProfilePicture>
          <Picture src='/src/assets/images/profile_img.jpg' alt='Picture' />
        </ProfilePicture>
        <ContentContainer>
          <ContentTitle>
            오승주 <ContentSubTitle>Oh Seung Ju</ContentSubTitle>
          </ContentTitle>
          <Content>
            Web Design & Developer
            <br />
            I was born on September 27, 2000.
            <br />I graduated from Incheon Design High School majoring in visual design.
          </Content>
          <Content>
            I can do everything by myself, from design to development.
            <br />
            As I have a dream of being a web master, I will continue to move
            <br />
            forward towards my dream.
          </Content>
          <Content>
            웹 디자인 & 개발자
            <br />
            2000년 9월 27일에 태어났습니다.
            <br />
            인천디자인고등학교 시각디자인과를 졸업했습니다.
          </Content>
          <Content>
            디자인부터 개발까지 그 모든것을 담당하여 나 자신 만으로 모든 것을 해낼 수<br />
            있습니다. 웹 마스터라는 꿈을 갖고 있기에 저는 계속 꿈을 향해 전진할 것 입니다.
          </Content>
        </ContentContainer>
      </ProfileContainer>
    </Container>
  );
};

export default About;
