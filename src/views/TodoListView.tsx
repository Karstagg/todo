import {StyleSheet, View} from 'react-native';
import Button from '../components/inputs/Button';
import {text} from '../style/commonStyles';
import useLocalAuth from '../hooks/useLocalAuth';

export default (): React.ReactElement => {
  const {deauthenticate} = useLocalAuth();
  return (
    <View style={styles.container}>
      <Button
        text="Sign Out"
        style={styles.signOutButton}
        textStyle={styles.signOutButtonText}
        onPress={deauthenticate}
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
