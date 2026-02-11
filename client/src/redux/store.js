import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import themeReducer from './theme/themeSlice'
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

//root will be the combined reducer insted of having all redusers at one place
const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer, 
});
const persistConfig={
    key:'root',
    storage,
    version:1,
};

const persistedReducer = persistReducer(persistConfig,rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false}),
});

export const persistor=persistStore(store);

