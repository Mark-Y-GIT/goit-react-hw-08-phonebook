import data from '../data.json';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, addFilter } from './actions';

export const contactsReducer = createReducer(data, {
  [addContact]: (state, action) => {
    return [action.payload, ...state];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

export const filterReducer = createReducer('', {
  [addFilter]: (_, action) => {
    return action.payload;
  },
});
