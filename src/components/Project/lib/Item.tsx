import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Typograph from '#components/Typograph';
import Thumbnail from '#components/Thumbnail';
import { ProjectProps } from '#apis/project/project';

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
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const TypeContainer = styled.div`
  position: absolute;
  width: 100%;
  right: 0;
  transform: rotate(-90deg);
  transform-origin: left;
  display: flex;
  align-items: center;
  bottom: 5rem;
  &::before {
    content: '';
    display: block;
    width: 8rem;
    height: 1px;
    background-color: ${({ theme }) => theme.darkGreyColor};
    margin-right: 2rem;
  }
`;

const MetaContainer = styled.div`
  margin-top: 2rem;
  display: flex;
`;

const Title = styled(Typograph.Title)`
  margin-right: 4rem;
`;

const Item = React.forwardRef<HTMLDivElement, ProjectProps>(
  ({ id, thumbnail, title, description, platform, meta, ...props }, ref): React.ReactElement => {
    return (
      <Container ref={ref} {...props}>
        <Link href={`/works/${id}`}>
          <a href={`/works/${id}`}>
            <TypeContainer>
              <Typograph.Caption>{meta}</Typograph.Caption>
            </TypeContainer>
            <Thumbnail
              isMobile={platform?.code === 'PLAT002'}
              poster={thumbnail?.url}
              video={thumbnail?.url}
            />
            <MetaContainer>
              <Title>{title}</Title>
              <Typograph.Caption>{description}</Typograph.Caption>
            </MetaContainer>
          </a>
        </Link>
      </Container>
    );
  }
);

export default Item;
