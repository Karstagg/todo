import {createSlice} from '@reduxjs/toolkit';
import type {RootState} from '../store';

// Define a type for the slice state
interface AuthState {
  authenticated: boolean;
}

// Define the initial state using that type
const initialState: AuthState = {
  authenticated: false,
};

export const counterSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    singIn: (state) => {
      state.authenticated = true;
    },
    signOut: (state) => {
      state.authenticated = false;
    },
  },
});

export const {singIn, signOut} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.auth;

export default counterSlice.reducer;
