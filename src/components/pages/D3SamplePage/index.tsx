import {
  MainTemplate,
  MainTemplateProps,
} from 'components/templates/MainTemplate';
import { useComponentState } from './usecase/componentState';
import { D3SampleItem } from './types';

export type D3SampleProps = {
  data: D3SampleItem[];
  template: MainTemplateProps;
  name: string;
  isLoading: boolean;
  isUpdating: boolean;
  updateData: (data: D3SampleItem[]) => void;
};

export function D3Sample(props: D3SampleProps) {
  const state = useComponentState(props);
  return (
    <MainTemplate {...props.template} header="D3Sample">
      <form onSubmit={state.formik.handleSubmit}>
        <div>{props.name}</div>
        <div ref={state.d3Root}></div>
        {props.isLoading && <div>Loading...</div>}
        {props.isUpdating && <div>Updating...</div>}
        <textarea
          name="dataText"
          onChange={state.onChangeD3SampleText}
          value={state.formik.values.dataText}
        />
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
