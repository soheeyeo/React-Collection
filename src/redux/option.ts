import { createSlice } from '@reduxjs/toolkit';
import { OptionList } from '@/types/optionList';

const initialState: OptionList = [];

export const optionSlices = createSlice({
  name: 'option',
  initialState: initialState,
  reducers: {
    setOptionList: (state, action) => {
      return action.payload;
    },
    setOptionDefault: (state, action) => {
      const { optionId, defaultValue } = action.payload;
      state[optionId].default = defaultValue;
    },
  },
});

export const { setOptionList, setOptionDefault } = optionSlices.actions;
export const optionReducer = optionSlices.reducer;
