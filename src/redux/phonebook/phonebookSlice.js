import { createSlice } from '@reduxjs/toolkit';
import { fetchAllContacts, setAddContact, setDeleteContact } from './options';

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

  extraReducers: builder => {
    builder

      .addCase(fetchAllContacts.pending, state => {
        state.loading = true;
      })

      .addCase(fetchAllContacts.fulfilled, ({ contacts }, { payload }) => {
        contacts.items = payload;
        contacts.isLoading = false;
      })

      .addCase(fetchAllContacts.rejected, ({ contacts }, { payload }) => {
        contacts.isLoading = false;
        contacts.error = payload;
      })

      .addCase(setAddContact.pending, state => {
        state.loading = true;
      })

      .addCase(setAddContact.fulfilled, ({ contacts }, { payload }) => {
        contacts.items.push(payload);
        contacts.isLoading = false;
      })

      .addCase(setAddContact.rejected, ({ contacts }, { payload }) => {
        contacts.isLoading = false;
        contacts.error = payload;
      })

      .addCase(setDeleteContact.pending, state => {
        state.loading = true;
      })

      .addCase(setDeleteContact.fulfilled, ({ contacts }, { payload }) => {
        contacts.items = contacts.items.filter(
          contact => contact.id !== payload
        );
        contacts.isLoading = false;
      })

      .addCase(setDeleteContact.rejected, ({ contacts }, { payload }) => {
        contacts.isLoading = false;
        contacts.error = payload;
      });
  },
});

export const { filterContacts } = phonebookSlice.actions;
