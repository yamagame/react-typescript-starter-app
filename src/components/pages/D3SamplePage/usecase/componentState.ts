import React from 'react';
import { D3SampleProps } from '..';
import * as CSV from './csv-parser';
import { updateElement } from './updateElement';
import { D3SampleItem, FormProps, D3SampleGraphType } from '../types';
import { useFormik } from 'formik';

const toCSVFromData = (data: D3SampleItem[]) => {
  const csvData: CSV.CSVItem[][] = data.map((d) => [
    { value: d.name.toString() },
    { value: d.value.toString() },
  ]);
  return CSV.stringify(csvData);
};

const toDataFromCSV = (text: string) => () => {
  const toValue = (value: string) => {
    const v = parseInt(value);
    if (isNaN(v)) {
      return 0;
    }
    return v;
  };
  const csvData = CSV.parse(text);
  const graphData = csvData
    .filter((d) => d.length > 1)
    .map(
      (d) => ({ name: d[0].value, value: toValue(d[1].value) } as D3SampleItem)
    );
  return graphData;
};

export const useComponentState = (
  props: D3SampleProps,
  graphType: D3SampleGraphType
) => {
  const formik = useFormik<FormProps>({
    initialValues: {
      dataText: '',
    },
    validate: (values) => {
      //
    },
    onSubmit: (values) => {
      //
    },
  });
  const [d3sampleData, setD3SampleData] = React.useState<D3SampleItem[]>(
    props.data
  );
  const d3Root = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (d3Root.current) {
      updateElement(d3Root.current, d3sampleData, graphType);
    }
  }, [d3sampleData, graphType]);

  React.useEffect(() => {
    setD3SampleData(props.data);
    formik.setFieldValue('dataText', toCSVFromData(props.data));
  }, [props.data]);

  const onChangeD3SampleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    formik.handleChange(e);
    setD3SampleData(toDataFromCSV(e.target.value));
  };

  return {
    d3Root,
    onChangeD3SampleText,
    d3sampleData,
    setD3SampleData,
    formik,
  };
};
