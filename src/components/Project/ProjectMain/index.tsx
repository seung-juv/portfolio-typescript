import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Meta from './Meta';
import Thumbnail from './Thumbnail';
import Title from './Title';

export interface ProjectMainProps {
  id: number;
  className?: string;
  background: string;
  thumb: string;
  project: string;
  caption: string;
  category: string;
}

const Wrapper = styled.div`
  overflow: hidden;
`;

const Container = styled.div`
  position: relative;
  width: 76%;
  margin-left: 0.5rem;
  > a {
    display: block;
    width: 100%;
    height: 100%;
    padding-left: 2.5rem;
  }
  &:hover {
    > a {
      transform: scale(0.95);
    }
  }
  @media screen and (max-width: 1440px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    height: 60rem;
  }
`;

const ProjectMain = ({
  id,
  className,
  background,
  thumb,
  project,
  caption,
  category,
}: ProjectMainProps) => {
  return (
    <Wrapper className={className}>
      <Container>
        <Link href={`/works/${id}`}>
          <a>
            <Thumbnail background={background} thumb={thumb} />
            <Meta category={category} />
            <Title title={project} caption={caption} />
          </a>
        </Link>
      </Container>
    </Wrapper>
  );
};

export default ProjectMain;
