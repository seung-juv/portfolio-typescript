import React from 'react';
import styled from 'styled-components';
import { workDatas } from '#data/workDatas.ts';
import SubTitle from '../atoms/SubTitle';
import ProjectMainItem, { ProjectMainItemProps } from '../molecules/ProjectMainItem';

const Wrapper = styled.div``;

const MainProjectSubTitle = styled(SubTitle)`
  margin-left: 30%;
  margin-bottom: 3.5rem;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 20rem;
  > div {
    &:nth-child(2n - 1) {
      align-self: flex-end;
    }
    &:not(:last-child) {
      margin-bottom: 20rem;
    }
  }
`;

const MainProjects = (): React.ReactElement => {
  return (
    <Wrapper>
      <MainProjectSubTitle label='Works' href='/works' />
      <Container>
        {workDatas?.map(
          (item: ProjectMainItemProps): React.ReactElement => (
            <ProjectMainItem key={item.id} {...item} />
          )
        )}
      </Container>
    </Wrapper>
  );
};

export default MainProjects;
