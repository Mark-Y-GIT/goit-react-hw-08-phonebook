import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const addContact = createAction(
  'contacts/add',
  function prepare({ name, number }) {
    return {
      payload: {
        id: uuidv4(),
        name,
        number,
      },
    };
  }
);

export const deleteContact = createAction('contacts/delete');

export const addFilter = createAction('filter/value');

export const getFilteredContacts = createAction('contacts/filteredContacts');
