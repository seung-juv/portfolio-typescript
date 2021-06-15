import React from 'react';
import styled from 'styled-components';
import { ThumbnailProps } from '../Thumbnail';

const Wrapper = styled.div<{ background: string }>`
  width: 100%;
  height: 80rem;
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 1440px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    height: 60rem;
  }
`;

const Container = styled.div`
  width: 80%;
  max-width: 30rem;
  height: 65rem;
  border-radius: 10px;
  position: absolute;
  top: 0;
  right: 3.5rem;
  bottom: 3rem;
  margin: auto 0;
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    opacity: 0.2;
    background-image: url(${'/images/mockup/mobile_mockup.png'});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  @media screen and (max-width: 1440px) {
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  @media screen and (max-width: 768px) {
    max-width: 23rem;
    height: 50rem;
  }
`;

const Video = styled.video`
  width: 96%;
  height: 90%;
  border-radius: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  object-fit: cover;
  ${({ theme }) => theme.transition};
  z-index: 5;
`;

const Mobile = ({ poster, video }: ThumbnailProps): React.ReactElement => {
  const background = `/images/background/background_gradient_${
    Math.floor(Math.random() * 3) + 1
  }.png`;
  return (
    <Wrapper background={background}>
      <Container>
        <Video autoPlay loop muted poster={poster}>
          <source src={video} />
        </Video>
      </Container>
    </Wrapper>
  );
};

export default Mobile;
