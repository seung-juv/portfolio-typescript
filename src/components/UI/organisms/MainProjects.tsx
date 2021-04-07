import React from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { workDatas } from '#data/workDatas';
import SubTitle from '../atoms/SubTitle';
import ProjectMainItem, { ProjectMainItemProps } from '../molecules/ProjectMainItem';

gsap.registerPlugin(ScrollTrigger);

type projectsType = Array<HTMLDivElement> | Array<undefined>;

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
  const [data] = React.useState(workDatas);
  const projectsRef = React.useRef<projectsType>([]);
  const animate = React.useCallback((element, direction?, from?) => {
    let x = 0;
    const y = direction * 100;
    if (from === 'left') {
      x = -100;
    } else if (from === 'right') {
      x = 100;
    }
    gsap.fromTo(
      element,
      { delay: 0.25, x, y, autoAlpha: 0 },
      {
        duration: 1.25,
        delay: 0.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: 'expo',
        overwrite: 'auto',
      }
    );
  }, []);

  const hide = React.useCallback(element => {
    gsap.set(element, { autoAlpha: 0 });
  }, []);

  React.useEffect(() => {
    let unsubscribe;
    if (projectsRef.current.length > 0) {
      unsubscribe = projectsRef.current.forEach(
        (element: HTMLDivElement | undefined, index: number): void => {
          const even = index % 2 === 0;
          hide(element); // assure that the element is hidden when scrolled into view
          ScrollTrigger.create({
            trigger: element,
            onEnter: () => {
              animate(element, null, even ? 'right' : 'left');
            },
            onEnterBack: () => {
              animate(element, -1, even ? 'right' : 'left');
            },
            onLeave: () => {
              hide(element);
            }, // assure that the element is hidden when scrolled into view
          });
        }
      );
    }
    return unsubscribe;
  }, [projectsRef]);

  return (
    <Wrapper>
      <MainProjectSubTitle label='Works' href='/works' />
      <Container>
        {data?.map(
          (item: ProjectMainItemProps, index: number): React.ReactElement => (
            <ProjectMainItem
              key={item.id}
              ref={ref => {
                projectsRef.current[index] = ref || undefined;
              }}
              {...item}
            />
          )
        )}
      </Container>
    </Wrapper>
  );
};

export default MainProjects;
