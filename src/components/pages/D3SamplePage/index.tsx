import React from 'react';
import {
  MainTemplate,
  MainTemplateProps,
} from 'components/templates/MainTemplate';
import { useComponentState } from './usecase/componentState';
import { D3SampleItem, D3SampleGraphType } from './types';

export type D3SampleProps = {
  data: D3SampleItem[];
  template: MainTemplateProps;
  name: string;
  isLoading: boolean;
  isUpdating: boolean;
  updateData: (data: D3SampleItem[]) => void;
};

export function D3Sample(props: D3SampleProps) {
  const [graphType, setGraphType] = React.useState(
    D3SampleGraphType.VERTICAL_BAR
  );
  const state = useComponentState(props, graphType);
  const selectGraphType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGraphType(e.target.value as D3SampleGraphType);
  };
  return (
    <MainTemplate {...props.template} header="D3Sample">
      <form onSubmit={state.formik.handleSubmit}>
        <div>{props.name}</div>
        {/* グラフの表示エリア */}
        <div
          style={{ width: 500, height: 300, display: 'inline-block' }}
          ref={state.d3Root}
        ></div>
        {props.isLoading && <div>Loading...</div>}
        {props.isUpdating && <div>Updating...</div>}
        <div>
          {/* グラフの選択 */}
          <select onChange={selectGraphType} value={graphType}>
            <option value={D3SampleGraphType.VERTICAL_BAR}>VERTICAL</option>
            <option value={D3SampleGraphType.HORIZONTAL_BAR}>HORIZONTAL</option>
            <option value={D3SampleGraphType.TEXT}>TEXT</option>
          </select>
        </div>
        {/* データセット入力エリア */}
        <textarea
          name="dataText"
          rows={10}
          cols={50}
          onChange={state.onChangeD3SampleText}
          value={state.formik.values.dataText}
        />
        {/* セーブボタン */}
        <div>
          <input
            type="submit"
            onClick={() => props.updateData(state.d3sampleData)}
            value="Save"
          />
        </div>
      </form>
    </MainTemplate>
  );
}
