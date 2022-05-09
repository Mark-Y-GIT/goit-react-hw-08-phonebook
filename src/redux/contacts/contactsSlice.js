import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from './contactsOperation';

const initialState = {
  contacts: [],
  isLoading: false,
  isDeleting: false,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  extraReducers: {
    [getContacts.pending]: state => {
      state.isLoading = true;
    },
    [getContacts.fulfilled](state, action) {
      state.contacts = action.payload;
      state.isLoading = false;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.push(action.payload);
      state.isLoading = false;
    },

    [deleteContact.pending](state) {
      state.isDeleting = true;
    },
    [deleteContact.fulfilled]: (state, action) => ({
      ...state,
      contacts: state.contacts.filter(({ id }) => id !== action.payload),
      isDeleting: false,
    }),
  },
});

export default contactSlice.reducer;
