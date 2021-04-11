export type WorkType = {
  id: number;
  type: 'web' | 'app' | string;
  project: string;
  background: string;
  thumb: string;
  category: string;
  caption: string;
  meta: string[];
  tools: string[];
  page?: string;
  github: string;
};
