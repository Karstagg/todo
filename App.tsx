import AuthView from './src/views/AuthView';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {useEffect} from 'react';
import common from './src/style/commonStyles';
import Toasts from './src/components/Toasts';
import {useTypedSelector} from './src/hooks/reduxTypedHooks';
import {selectAuth} from './src/state/slices/auth';
import {Provider} from 'react-redux';
import {store} from './src/state/store';
import TodoListView from './src/views/TodoListView';

const AppWithState = (): React.ReactElement => {
  const {authenticated} = useTypedSelector((state) => selectAuth(state));
  console.log(authenticated);
  return (
    <SafeAreaView style={styles.mainContainer}>
      {!authenticated ? <AuthView /> : <TodoListView />}
      <Toasts />
    </SafeAreaView>
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
