import {
  MainTemplate,
  MainTemplateProps,
} from 'components/templates/MainTemplate';
import { FormSample, FormSampleProps } from 'components/organisms/FormSample';

type Props = FormSampleProps & {
  template: MainTemplateProps;
  disabled: boolean;
  option: string;
  options: string[];
};

export function FormPage(props: Props) {
  const { name, size, fruit, blood, actions, disabled, option, options } =
    props;
  return (
    <MainTemplate {...props.template} header="Form">
      <FormSample
        name={name}
        size={size}
        fruit={fruit}
        blood={blood}
        actions={actions}
        option={option}
        options={options}
        disabled={disabled}
      />
    </MainTemplate>
  );
}
