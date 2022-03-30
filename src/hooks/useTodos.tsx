import {
  addTodo,
  deleteTodo,
  editTodo,
  selectTodos,
  Todo,
} from '@state/slices/todos';
import {useTypedDispatch, useTypedSelector} from '@hooks/typedReduxHooks';
import {toast} from 'react-hot-toast/src/core/toast';
import uuid from 'react-native-uuid';

export default () => {
  const {todos} = useTypedSelector((state) => selectTodos(state));
  const todoArray = Object.entries(todos);
  const dispatch = useTypedDispatch();
  const addTodoListItem = (todo: Todo) => {
    dispatch(addTodo({uuid: uuid.v4().toString(), todo}));
    toast.success('Todo Added');
  };
  const editTodoListItem = (todo: Record<string, Todo>) => {
    dispatch(editTodo(todo));
    toast.success('Todo Edited');
  };
  const removeTodoListItem = (todoListItemID: string) => {
    dispatch(deleteTodo(todoListItemID));
    toast.success('Todo Deleted');
  };
  const getTodoByID = (id: string) => {
    return todos[id];
  };

  return {
    addTodoListItem,
    removeTodoListItem,
    getTodoByID,
    todos,
    todoArray,
    editTodoListItem,
  };
};
