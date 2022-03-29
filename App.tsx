import AuthView from '@views/AuthView';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {useEffect} from 'react';
import common from '@styles/commonStyles';
import Toasts from '@indicators/Toasts';
import {selectAuth} from '@state/slices/auth';
import {Provider} from 'react-redux';
import TodoListView from '@views/TodoListView';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from '@state/store';
import Loading from '@indicators/Loading';
import {useTypedSelector} from '@hooks/typedReduxHooks';

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
