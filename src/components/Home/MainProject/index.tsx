import { workDatas } from '#data/workDatas';
import ProjectMain, { ProjectMainProps } from '#components/Project/ProjectMain';
import styled from 'styled-components';

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
    <Container>
      {workDatas?.map(
        (item: ProjectMainProps, index: number): React.ReactElement => (
          <ProjectMain key={index} {...item} />
        )
      )}
    </Container>
  );
};

export default MainProject;
