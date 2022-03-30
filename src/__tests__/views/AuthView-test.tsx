import React from 'react';
import {render} from '@testUtils';
import AuthView from '@views/AuthView';

test('renders correctly', () => {
  const {toJSON} = render(<AuthView />);
  expect(toJSON()).toMatchSnapshot();
});
