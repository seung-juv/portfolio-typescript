import { CodeProps } from '#apis/code/code';
import { FileProps } from '#apis/file/file';

export interface ProjectProps {
  id: number;
  accountId: number;
  type?: CodeProps;
  platform?: CodeProps;
  title?: string;
  description?: string;
  meta?: string;
  thumbnail?: FileProps;
  github?: string;
  page?: string;
  tools?: CodeProps[];
  startAt?: Date;
  endAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface GetProjectsData {
  GetProjects: ProjectProps[];
}
