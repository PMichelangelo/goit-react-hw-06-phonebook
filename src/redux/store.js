import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import rootReducer from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)




/*
import { legacy_createStore } from "redux";
import contactsReducer from "./contacts/contacts-reducer";
import filterReducer from "./filter/filter-reducer";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer
  }
})

const store = legacy_createStore(rootReducer, enhancer)
*/

