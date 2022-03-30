import AuthView from '@views/AuthView';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {useEffect, useState} from 'react';
import common from '@styles/commonStyles';
import Toasts from '@indicators/Toasts';
import {Provider} from 'react-redux';
import TodoListView from '@views/TodoListView';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from '@state/store';
import Loading from '@indicators/Loading';
import useLocalAuth from '@hooks/useLocalAuth';
import * as SplashScreen from 'expo-splash-screen';

const AppWithState = (): React.ReactElement => {
  const {authenticated} = useLocalAuth();
  return (
    <PersistGate loading={<Loading />} persistor={persistor}>
      <SafeAreaView style={styles.mainContainer}>
        {!authenticated ? <AuthView /> : <TodoListView />}
        <Toasts />
      </SafeAreaView>
    </PersistGate>
  );
};

export default (): React.ReactElement | null => {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);
  useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

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
