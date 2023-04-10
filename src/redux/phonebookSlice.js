import { createSlice } from '@reduxjs/toolkit';
import { fetchAllContacts, setAddContact, setDeleteContact } from './options';

const handlePending = ({ contacts }) => {
  contacts.isLoading = true;
  contacts.error = null;
};

const handleRejected = ({ contacts }, { payload }) => {
  contacts.isLoading = false;
  contacts.error = payload;
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },

  reducers: {
    filterContacts: (state, { payload }) => {
      state.filter = payload;
    },
  },

  extraReducers: {
    [fetchAllContacts.pending]: handlePending,
    [fetchAllContacts.fulfilled]({ contacts }, { payload }) {
      contacts.items = payload;
      contacts.isLoading = false;
    },
    [fetchAllContacts.rejected]: handleRejected,

    [setAddContact.pending]: handlePending,
    [setAddContact.fulfilled]({ contacts }, { payload }) {
      contacts.items.push(payload);
      contacts.isLoading = false;
    },
    [setAddContact.rejected]: handleRejected,

    [setDeleteContact.pending]: handlePending,
    [setDeleteContact.fulfilled]({ contacts }, { payload }) {
      contacts.items = contacts.items.filter(contact => contact.id !== payload);
      contacts.isLoading = false;
    },
    [setDeleteContact.rejected]: handleRejected,
  },
});

export const { filterContacts } = phonebookSlice.actions;
