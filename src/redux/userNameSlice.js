import { createSlice } from '@reduxjs/toolkit';

export const userNameSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addUser: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteUser: (state, { payload }) => {
      state.contacts = state.contacts.filter(el => el.id !== payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, deleteUser } = userNameSlice.actions;

export default userNameSlice.reducer;
