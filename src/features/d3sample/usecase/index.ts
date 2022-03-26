import { D3SampleData } from '../types';
import { D3SampleItem } from 'components/pages/D3SamplePage/types';

export const D3SampleItemToData = (data: D3SampleItem[]) => {
  return data.map((d) => ({ name: d.name, value: d.value } as D3SampleData));
};

export const D3SampleDataToItem = (data: D3SampleData[]) => {
  return data.map((d) => ({ name: d.name, value: d.value } as D3SampleItem));
};
