import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setAddContact = createAsyncThunk(
  'contacts/setAddContacts',
  async (newContact, thunkAPI) => {
    try {
      const res = await axios.post('/contacts', newContact);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setDeleteContact = createAsyncThunk(
  'contacts/setDeleteContacts',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
