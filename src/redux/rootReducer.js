import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice';
import phonebookFormSlice from './phonebookFrom/phonebookForm-slice';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  phonebookForm: phonebookFormSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
