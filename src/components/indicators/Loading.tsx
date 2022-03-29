import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {theme} from '@styles/commonStyles';

// a simple loading indicator
export default (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={theme.textColor} size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
