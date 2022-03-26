// UI側の型定義
export interface D3SampleItem {
  name: string;
  value: number;
}

export interface FormProps {
  dataText: string;
}

export enum D3SampleGraphType {
  TEXT = 'text',
  VERTICAL_BAR = 'vertical-bar',
  HORIZONTAL_BAR = 'horizontal-bar',
}
