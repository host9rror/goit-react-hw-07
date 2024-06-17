import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
   FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistedReducer } from './contactsSlice';
import filtersReducer from './filtersSlice';

export const store = configureStore({
  reducer: { contacts: persistedReducer, filters: filtersReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);