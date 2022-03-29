import {createSlice} from '@reduxjs/toolkit';
import type {RootState} from '@state/store';

interface AuthState {
  authenticated: boolean;
}

const initialState: AuthState = {
  authenticated: false,
};

export const counterSlice = createSlice({
  name: 'auth',
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

export const selectAuth = (state: RootState) => state.auth;

export default counterSlice.reducer;
