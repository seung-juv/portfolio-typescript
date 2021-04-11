import React from 'react';
import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import Head from 'next/head';
import SubTitle from '#components/UI/atoms/SubTitle';
import ProjectItem from '#components/UI/molecules/ProjectItem';
import { getWork } from '#/api/worksApi';
import { getIcon } from '#/common/utils';

const Container = styled.div``;

const ProjectSubTitle = styled(SubTitle)`
  margin: 35vh 0 5rem 10%;
`;

const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  margin-bottom: 35rem;
  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
    height: 100rem;
    align-items: flex-start;
  }
`;

const ThumbContainer = styled.div<{ src: string }>`
  width: 100%;
  height: 100%;
  flex: 1;
  overflow: hidden;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  @media screen and (max-width: 768px) {
    margin-bottom: 5rem;
  }
`;

const Thumb = styled.div`
  width: 100%;
  max-width: 105rem;
  height: 60rem;
  border-radius: 10px;
  position: absolute;
  background: #ffffff20;
  top: 0;
  right: 1rem;
  bottom: 3rem;
  margin: auto 0;
  @media screen and (max-width: 768px) {
    width: 100rem;
    height: 50rem;
    left: 5rem;
    right: 0;
    margin: auto;
  }
  @media screen and (max-width: 425px) {
    width: 85rem;
    height: 35rem;
    left: 3rem;
  }
`;

const ThumbVideo = styled.video`
  width: 100%;
  max-width: 100rem;
  border-radius: 10px;
  position: absolute;
  top: 3rem;
  right: 1rem;
  bottom: 0;
  margin: auto 0;
  object-fit: cover;
  ${({ theme }) => theme.transition};
  @media screen and (max-width: 768px) {
    top: 0;
    right: 0;
    left: 0;
    margin: auto;
  }
`;

const ThumbApp = styled.div`
  width: 80%;
  max-width: 30rem;
  height: 65rem;
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    opacity: 0.2;
    background-image: url('/images/mockup/mobile_mockup.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

const ThumbAppVideo = styled.video`
  width: 96%;
  height: 90%;
  border-radius: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  object-fit: cover;
  ${({ theme }) => theme.transition};
  z-index: 5;
`;

const InfoContainer = styled.div`
  padding: 0 8%;
`;

const InfoTitle = styled.span`
  display: block;
  font-size: 1rem;
  color: ${({ theme }) => theme.lightGreyColor};
  margin-bottom: 1.5rem;
`;

const MetaContainer = styled.ul`
  padding-left: 1rem;
  margin-bottom: 3rem;
`;

const Meta = styled.li`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.blackColor};
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const Tools = styled.ul`
  display: flex;
  margin-bottom: 5rem;
`;

const Tool = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 1rem;
  padding: 1rem;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.blackColor}05;
  ${({ theme }) => theme.transition};
  &:not(:last-child) {
    margin-right: 1rem;
  }
  &:hover {
    background-color: ${({ theme }) => theme.blackColor}15;
  }
`;

const NextProject = styled(ProjectItem)`
  margin: 0 auto;
  @media screen and (max-width: 1440px) {
    width: 95%;
  }
`;

const LinkContainer = styled.div``;

const Link = styled.a`
  display: block;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.blackColor};
  padding-top: 1rem;
  text-indent: 1rem;
  opacity: 0.5;
  ${({ theme }) => theme.transition};
  &:hover {
    opacity: 1;
  }
  &::after {
    margin-top: 1rem;
    display: block;
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.blackColor};
  }
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const WorksDetail = (): React.ReactElement => {
  const router = useRouter();
  const { id } = router.query || undefined;
  const data = id ? getWork(+id) : undefined;
  const nextWork = id ? getWork(+id + 1) : undefined;
  return !data ? (
    <></>
  ) : (
    <Container>
      <Head>
        <title>Seung Ju | {data?.project}</title>
      </Head>
      <ProjectSubTitle label={data.project} />
      <ProjectContainer>
        <ThumbContainer src={`/images/background/${data?.background}.png`}>
          {data?.type === 'web' ? (
            <Thumb>
              <ThumbVideo
                autoPlay
                loop
                muted
                poster={`/images/thumb/${data?.thumb}.mov`}
                playsInline
              >
                <source src={`/images/thumb/${data?.thumb}.mov`} />
              </ThumbVideo>
            </Thumb>
          ) : (
            <ThumbApp>
              <ThumbAppVideo
                autoPlay
                loop
                muted
                poster={`/images/thumb/${data?.thumb}.mov`}
                playsInline
              >
                <source src={`/images/thumb/${data?.thumb}.mov`} />
              </ThumbAppVideo>
            </ThumbApp>
          )}
        </ThumbContainer>
        <InfoContainer>
          <InfoTitle>PROJECT</InfoTitle>
          <MetaContainer>
            {data?.meta.map((meta, idx) => (
              <Meta key={idx}>{meta}</Meta>
            ))}
          </MetaContainer>
          <Tools>
            {data?.tools.map((tool, idx) => (
              <Tool key={idx}>{getIcon(tool)}</Tool>
            ))}
          </Tools>
          <LinkContainer>
            {data?.page && (
              <Link href={data?.page} target='_blank'>
                Visit Page
              </Link>
            )}
            {data?.github && (
              <Link href={data?.github} target='_blank'>
                Visit Github
              </Link>
            )}
          </LinkContainer>
        </InfoContainer>
      </ProjectContainer>
      {nextWork && <NextProject {...nextWork} />}
    </Container>
  );
};

export default WorksDetail;
