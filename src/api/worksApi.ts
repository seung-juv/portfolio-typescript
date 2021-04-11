import { workDatas } from '#data/workDatas';
import { WorkType } from '#types/workType';

export const getWork = (id: number): WorkType | undefined => {
  const data = workDatas.find(v => +v.id === +id);
  return data;
};
