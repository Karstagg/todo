import React from 'react';
import {render} from '@testUtils';
import TodoListView from '@views/TodoListView';

test('renders correctly', () => {
  const {toJSON} = render(<TodoListView />);
  expect(toJSON()).toMatchSnapshot();
});
