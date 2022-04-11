import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

import step1Reducer from "./slices/step1/step1";
import step2Reducer from "./slices/step2/step2";
import step3Reducer from "./slices/step3/step3";
import step4Reducer from "./slices/step4/step4";

const persistConfig = {
  key: "root",
  version: 1,
  storage
};

const rootReducer = combineReducers({
  step1: step1Reducer,
  step2: step2Reducer,
  step3: step3Reducer,
  step4: step4Reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);

export default store;
