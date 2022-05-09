import { createReducer } from '@reduxjs/toolkit';
import { addFilter } from './actions';

export const filterReducer = createReducer('', {
  [addFilter]: (_, action) => {
    return action.payload;
  },
});
