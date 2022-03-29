import {StyleSheet, Text, View} from 'react-native';
import {Toast} from 'react-hot-toast';
import {theme} from '@styles/commonStyles';

// a simple notification toast
export default ({toast}: {toast: Toast}): React.ReactElement => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            toast.type === 'success'
              ? theme.constructiveTransparent
              : theme.destructiveTransparent,
        },
      ]}>
      <Text style={styles.text}>{toast.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginHorizontal: '10%',
    marginVertical: '1%',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    opacity: 1,
  },
});
