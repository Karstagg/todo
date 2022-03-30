import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '@state/store';

export interface Todo {
  title: string;
  content: string;
}

interface TodoState {
  todos: Record<string, Todo>;
}

const initialState: TodoState = {
  todos: {},
};

export const counterSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{uuid: string; todo: Todo}>) => {
      state.todos = {
        ...state.todos,
        [action.payload.uuid]: action.payload.todo,
      };
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const newState = state.todos;
      delete newState[id];
      state.todos = newState;
    },
    editTodo: (state, action: PayloadAction<Record<string, Todo>>) => {
      const id = Object.keys(action.payload)[0];
      const newState = state.todos;
      newState[id] = action.payload[id];
      state.todos = newState;
    },
  },
});

export const {addTodo, deleteTodo, editTodo} = counterSlice.actions;

export const selectTodos = (state: RootState) => state.todos;

export default counterSlice.reducer;
