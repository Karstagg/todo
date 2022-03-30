import {combineReducers, configureStore} from '@reduxjs/toolkit';
import auth from '@state/slices/auth';
import todos from '@state/slices/todos';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({auth, todos});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
