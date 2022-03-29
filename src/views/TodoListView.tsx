import {StyleSheet, View} from 'react-native';
import Button from '@inputs/Button';
import {text} from '@styles/commonStyles';
import useLocalAuth from '@hooks/useLocalAuth';

// authorized view containing to-do functionality
export default (): React.ReactElement => {
  const {revokeAuth} = useLocalAuth();
  return (
    <View style={styles.container}>
      <Button
        text="Sign Out"
        style={styles.signOutButton}
        textStyle={styles.signOutButtonText}
        onPress={revokeAuth}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '2%',
  },
  signOutButton: {
    alignSelf: 'flex-end',
    borderWidth: 1,
    alignItems: 'center',
    width: '25%',
    padding: 10,
  },
  signOutButtonText: {
    ...text.body,
  },
});
