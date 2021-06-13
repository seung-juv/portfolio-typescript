export enum ProjectPlatformType {
  'web',
  'app',
}

export enum ProjectTypeTypes {
  'develop',
  'design',
}

export enum ProjectToolTypes {
  'react',
  'react-native',
  'graphql',
  'prisma',
  'firebase',
  'styled-components',
}

export interface ProjectProps {
  id: number;
  accountId: number;
  type?: ProjectTypeTypes;
  platform?: ProjectPlatformType;
  title?: string;
  caption?: string;
  meta?: string;
  thumbnail?: number;
  github?: string;
  page?: string;
  tools?: ProjectToolTypes[];
  startAt?: Date;
  endAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface GetProjectsData {
  GetProjects: ProjectProps[];
}
