import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { phonebookReducer } from "./phonebook/phonebook-reducers";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const phonebookPersistConfig = {
  key: "contacts",
  storage,
  blacklist: "filter",
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
export const store = configureStore({
  reducer: {
    phonebook: persistReducer(phonebookPersistConfig, phonebookReducer),
  },
  middleware,
});

export const persistor = persistStore(store);
