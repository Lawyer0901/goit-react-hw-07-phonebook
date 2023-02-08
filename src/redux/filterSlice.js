import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    filterContact: (state, { payload }) => {
      state.filter = payload;
      console.log('this is payload from filter', payload);
      console.log('this is state from filter', state);
    },
  },
});

// Action creators are generated for each case reducer function
export const { filterContact } = filterSlice.actions;

export default filterSlice.reducer;
