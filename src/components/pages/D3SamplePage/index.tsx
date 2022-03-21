import {
  MainTemplate,
  MainTemplateProps,
} from 'components/templates/MainTemplate';
import { useComponentState } from './usecase/componentState';
import { D3SampleItem } from './types';

export type D3SampleProps = {
  data: D3SampleItem[];
  template: MainTemplateProps;
  isLoading: boolean;
  updateData: (data: D3SampleItem[]) => void;
};

export function D3Sample(props: D3SampleProps) {
  const state = useComponentState(props);
  return (
    <MainTemplate {...props.template} header="D3Sample">
      <form onSubmit={state.formik.handleSubmit}>
        <div ref={state.d3Root}>Hello World</div>
        {props.isLoading && <div>Loading...</div>}
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
