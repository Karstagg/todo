import AuthView from './src/views/AuthView';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {useEffect} from 'react';
import common from './src/style/commonStyles';
import Toasts from './src/components/indicators/Toasts';
import {useTypedSelector} from './src/hooks/reduxTypedHooks';
import {selectAuth} from './src/state/slices/auth';
import {Provider} from 'react-redux';
import TodoListView from './src/views/TodoListView';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/state/store';
import Loading from './src/components/indicators/Loading';

const AppWithState = (): React.ReactElement => {
  const {authenticated} = useTypedSelector((state) => selectAuth(state));
  return (
    <PersistGate loading={<Loading />} persistor={persistor}>
      <SafeAreaView style={styles.mainContainer}>
        {!authenticated ? <AuthView /> : <TodoListView />}
        <Toasts />
      </SafeAreaView>
    </PersistGate>
  );
};

export default (): React.ReactElement => {
  useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  return (
    <Provider store={store}>
      <AppWithState />
    </Provider>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: common.theme.bgColor,
  },
});
