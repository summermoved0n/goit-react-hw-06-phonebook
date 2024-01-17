import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },
  reducers: {
    updateFilter: state => {
      state.value += 1;
    },
  },
});

export const { updateFilter } = filterSlice.actions;
const filterReducer = filterSlice.reducer;

export default filterReducer;
