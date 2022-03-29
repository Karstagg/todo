import {useToaster} from 'react-hot-toast/src/core/use-toaster';
import {StyleSheet, View} from 'react-native';
import Toast from './Toast';

// a container for notification toasts
export default (): React.ReactElement => {
  const {toasts} = useToaster();

  return (
    <View style={styles.container}>
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    zIndex: 10,
    bottom: '5%',
  },
});
