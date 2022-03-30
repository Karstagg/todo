import reducer, {addTodo, deleteTodo, editTodo} from '@state/slices/todos';
import uuid from 'react-native-uuid';

let todoID = uuid.v4().toString();
let todoID2 = uuid.v4().toString();

test('should return the initial state', () => {
  expect(reducer(undefined, {type: undefined})).toEqual({todos: {}});
});

test('should handle a todo being added to an empty object', () => {
  const previousState = {todos: {}};
  expect(
    reducer(
      previousState,
      addTodo({uuid: todoID, todo: {title: 'test', content: 'testing'}}),
    ),
  ).toEqual({
    todos: {
      [todoID]: {
        title: 'test',
        content: 'testing',
      },
    },
  });
});

test('should handle a todo being added to an object containing one or more todos', () => {
  const previousState = {
    todos: {
      [todoID]: {
        title: 'test',
        content: 'testing',
      },
    },
  };
  expect(
    reducer(
      previousState,
      addTodo({uuid: todoID2, todo: {title: 'test2', content: 'testing2'}}),
    ),
  ).toEqual({
    todos: {
      [todoID]: {
        title: 'test',
        content: 'testing',
      },
      [todoID2]: {
        title: 'test2',
        content: 'testing2',
      },
    },
  });
});

test('should handle a todo being edited', () => {
  const previousState = {
    todos: {
      [todoID]: {
        title: 'test',
        content: 'testing',
      },
    },
  };
  expect(
    reducer(
      previousState,
      editTodo({
        [todoID]: {title: 'edited test', content: 'edited test content'},
      }),
    ),
  ).toEqual({
    todos: {
      [todoID]: {
        title: 'edited test',
        content: 'edited test content',
      },
    },
  });
});

test('should delete a todo', () => {
  const previousState = {
    todos: {
      [todoID]: {
        title: 'test',
        content: 'testing',
      },
      [todoID2]: {
        title: 'test2',
        content: 'testing2',
      },
    },
  };
  expect(reducer(previousState, deleteTodo(todoID2))).toEqual({
    todos: {
      [todoID]: {
        title: 'test',
        content: 'testing',
      },
    },
  });
});
