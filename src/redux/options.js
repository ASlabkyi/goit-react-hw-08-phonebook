import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'redux/API';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const contacts = await fetchContacts();
      return contacts;
    } catch (error) {
      console.log(error);
    }
  }
);

export const setAddContact = createAsyncThunk(
  'contacts/setAddContacts',
  async contact => {
    try {
      const result = await addContact(contact);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const setDeleteContact = createAsyncThunk(
  'contacts/setDeleteContacts',
  async id => {
    try {
      await deleteContact(id);
      return id;
    } catch (error) {
      console.log(error);
    }
  }
);
