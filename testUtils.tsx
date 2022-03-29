// test-utils.js
import {render, RenderOptions} from '@testing-library/react-native';
import {persistor, store} from '@state/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Loading from '@indicators/Loading';
import {ReactElement} from 'react';

const AllProviders = ({children}: {children: React.ReactChildren}) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, {wrapper: AllProviders, ...options});

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
