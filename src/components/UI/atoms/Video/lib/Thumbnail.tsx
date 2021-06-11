import React from 'react';
import styled from 'styled-components';

export interface ThumbnailProps {
  background: any;
  poster: any;
  video: any;
}

const Wrapper = styled.div<{ background: string }>`
  width: 100%;
  height: 80rem;
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  width: 70%;
  max-width: 105rem;
  height: 40rem;
  border-radius: 10px;
  background: #ffffff20;
  position: absolute;
  right: 2rem;
  top: 0;
  bottom: 0;
  margin: auto 0;
`;

const Video = styled.video`
  width: 95%;
  max-width: 100rem;
  border-radius: 10px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 1rem;
  margin: auto 0;
  object-fit: cover;
  @media screen and (max-width: 1440px) {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
`;

const Thumbnail = ({ background, poster, video }: ThumbnailProps): React.ReactElement => {
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

export default Thumbnail;
