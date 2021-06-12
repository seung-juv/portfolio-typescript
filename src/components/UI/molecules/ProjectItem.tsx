import React, { HTMLAttributes } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { WorkType } from '#types/workType';
import Typograph from '../atoms/Typograph';
import Thumbnail from '../atoms/Video/lib/Thumbnail';

export interface ProjectItemProps extends WorkType, Omit<HTMLAttributes<HTMLDivElement>, 'id'> {}

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

const ProjectItem = React.forwardRef<HTMLDivElement, ProjectItemProps>(
  ({ id, background, video, project, caption, category, ...props }, ref): React.ReactElement => {
    return (
      <Container ref={ref} {...props}>
        <Link href={`/works/${id}`}>
          <a href={`/works/${id}`}>
            <Thumbnail background={background} poster={video} video={video} />
            <Typograph.Caption>{category}</Typograph.Caption>
            <Typograph.Title>{project}</Typograph.Title>
            <Typograph.Caption>{caption}</Typograph.Caption>
          </a>
        </Link>
      </Container>
    );
  }
);

export default ProjectItem;
