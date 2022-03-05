import { MainTemplate } from 'ui/components/templates/MainTemplate';
import {
  FormSample,
  FormSampleProps,
} from 'ui/components/organisms/FormSample';

type Props = FormSampleProps;

export function FormPage(props: Props) {
  const { name, size, fruit, blood, actions } = props;
  return (
    <MainTemplate header="Form">
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
