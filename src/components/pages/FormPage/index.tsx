import {
  MainTemplate,
  MainTemplateProps,
} from 'components/templates/MainTemplate';
import { FormSample, FormSampleProps } from 'components/organisms/FormSample';

type Props = FormSampleProps & {
  template: MainTemplateProps;
};

export function FormPage(props: Props) {
  const { name, size, fruit, blood, actions } = props;
  return (
    <MainTemplate {...props.template} header="Form">
      <FormSample
        name={name}
        size={size}
        fruit={fruit}
        blood={blood}
        actions={actions}
      />
    </MainTemplate>
  );
}
