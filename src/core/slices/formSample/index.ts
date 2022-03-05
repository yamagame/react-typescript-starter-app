import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

type SizeType = 'big' | 'small';

export interface ArticleState {
  name: string;
  size: SizeType;
  blood: string;
  fruit: {
    apple: boolean;
    tangerine: boolean;
    grape: boolean;
  };
}

const initialState: ArticleState = {
  name: '',
  size: 'big',
  blood: 'A',
  fruit: {
    apple: false,
    tangerine: false,
    grape: false,
  },
};

export const formSampleSlice = createSlice({
  name: 'formSample',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setSize: (state, action: PayloadAction<SizeType>) => {
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
  },
});

export const selectState = (state: RootState) => state.formSample;

export const actions = {
  ...formSampleSlice.actions,
};

export default formSampleSlice.reducer;
