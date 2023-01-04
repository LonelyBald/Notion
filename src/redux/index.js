import {configureStore} from '@reduxjs/toolkit';

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) =>
      void (state.todos = state.todos.filter(
        ({id}) => id !== action.payload.id,
      )),
    setToggleCheckBox: (state, action) => {
      if (action.payload.toggleCheckBox === false) {
        return true;
      }
    },
  },
});
export const {addTodo, removeTodo, setToggleCheckBox} = todoSlice.actions;

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
