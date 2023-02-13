import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contact.thunk';

export const userNameSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  // reducers: {
  //   addUser: (state, { payload }) => {
  //     state.contacts.push(payload);
  //   },
  //   deleteUser: (state, { payload }) => {
  //     state.contacts = state.contacts.filter(el => el.id !== payload);
  //   },
  // },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
      console.log(state.items);
    },
    [fetchContacts.rejected]: state => {
      state.isLoading = false;
      state.error = 'error';
      console.log(state.error);
    },
    [addContact.pending]: state => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },

    [addContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteContact.pending]: state => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );
      state.items = state.items.splice(index, 1);
      // state.items = state.items.filter(item => item.id !== action.payload.id);
      // state.items.filter(el => el.id !== action.payload);
    },
    [deleteContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userNameSlice.reducer;
