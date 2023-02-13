import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const { data } = await axios.get(
    'https://63e3df8fc919fe386c111093.mockapi.io/api/v1/contacts'
  );
  return data;
});

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `https://63e3df8fc919fe386c111093.mockapi.io/api/v1/contacts/${contactId}`
      );
      //   console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://63e3df8fc919fe386c111093.mockapi.io/api/v1/contacts',
        newContact
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
