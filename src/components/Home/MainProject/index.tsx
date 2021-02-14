import { workDatas } from '#data/workDatas';
import ProjectMain, { ProjectMainProps } from '#components/Project/ProjectMain';
import styled from 'styled-components';
import SubTitle from '../SubTitle';

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
    &:nth-child(2n) {
      > * {
        justify-content: flex-start;
      }
    }
    &:not(:last-child) {
      margin-bottom: 20rem;
    }
  }
`;

const MainProject = (): React.ReactElement => {
  return (
    <Wrapper>
      <MainProjectSubTitle label='Works' href='/works' />
      <Container>
        {workDatas?.map(
          (item: ProjectMainProps, index: number): React.ReactElement => (
            <ProjectMain key={index} {...item} />
          )
        )}
      </Container>
    </Wrapper>
  );
};

export default MainProject;
