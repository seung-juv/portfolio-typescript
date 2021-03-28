import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Meta from '../atoms/Meta';
import Title from '../atoms/Title';
import Thumbnail from '../atoms/Thumbnail';

export interface ProjectMainItemProps {
  id: number;
  className?: string;
  background: string;
  thumb: string;
  project: string;
  caption: string;
  category: string;
}

const Container = styled.div`
  position: relative;
  width: 75%;
  > a {
    display: block;
    width: 100%;
    height: 100%;
    padding-left: 2.5rem;
    ${({ theme }) => theme.transition};
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

const ProjectMainItem = React.forwardRef<HTMLDivElement, ProjectMainItemProps>(
  ({ id, className, background, thumb, project, caption, category }, ref): React.ReactElement => {
    return (
      <Container ref={ref} className={className}>
        <Link href={`/works/${id}`}>
          <a href={`/works/${id}`}>
            <Thumbnail background={background} thumb={thumb} />
            <Meta category={category} />
            <Title title={project} caption={caption} />
          </a>
        </Link>
      </Container>
    );
  }
);

export default ProjectMainItem;
