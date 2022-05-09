import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { filterReducer } from './reducers';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authSlice';
import contactSlice from './contacts/contactsSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(authPersistConfig, authReducer);

const store = configureStore({
  reducer: {
    contacts: contactSlice,
    filter: filterReducer,
    auth: persistedReducer,
  },
  middleware,
});

const persistor = persistStore(store);

export default { store, persistor };
