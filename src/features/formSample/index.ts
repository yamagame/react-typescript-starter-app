import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Size = 'big' | 'small';
type Fruit = {
  apple: boolean;
  tangerine: boolean;
  grape: boolean;
};

export interface State {
  name: string;
  size: Size;
  blood: string;
  fruit: Fruit;
  option: string;
}

const initialState: State = {
  name: '',
  size: 'big',
  blood: 'A',
  fruit: {
    apple: false,
    tangerine: false,
    grape: false,
  },
  option: '',
};

export const formSampleSlice = createSlice({
  name: 'form-sample',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setSize: (state, action: PayloadAction<Size>) => {
      state.size = action.payload;
    },
    setBlood: (state, action: PayloadAction<string>) => {
      state.blood = action.payload;
    },
    setFruit: (
      state,
      action: PayloadAction<{ fruit: string; value: boolean }>
    ) => {
      state.fruit = {
        ...state.fruit,
        [action.payload.fruit]: action.payload.value,
      };
    },
    setOption: (state, action: PayloadAction<string>) => {
      state.option = action.payload;
    },
  },
});

export const actions = {
  ...formSampleSlice.actions,
};

export default formSampleSlice.reducer;
