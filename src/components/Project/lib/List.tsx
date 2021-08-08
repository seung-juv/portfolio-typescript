import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import Project from '#components/Project';
import Button from '#components/Button';
import { GET_PROJECTS } from '#apis/project';
import { GetProjectsData, ProjectProps } from '#apis/project/project';

const Wrapper = styled.div``;

const SubTitle = styled(Button.Link)`
  margin-left: 30%;
  margin-bottom: 3.5rem;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  > div {
    &:nth-child(2n - 1) {
      align-self: flex-end;
    }
    &:not(:last-child) {
      margin-bottom: 20rem;
    }
  }
`;

const List = (): React.ReactElement => {
  const { loading, data } = useQuery<GetProjectsData>(GET_PROJECTS, {
    variables: { maxResults: 4 },
  });

  if (loading) {
    return <span>loading...</span>;
  }

  return (
    <Wrapper>
      <SubTitle href='/works'>Works</SubTitle>
      <Container>
        {data?.GetProjects.map((item: ProjectProps): React.ReactElement => {
          return <Project.Item key={item.id} {...item} />;
        })}
      </Container>
    </Wrapper>
  );
};

export default List;
