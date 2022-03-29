import {StyleSheet, Text, View} from 'react-native';
import useLocalAuth from '@hooks/useLocalAuth';
import Button from '@inputs/Button';
import {theme, text} from '@styles/commonStyles';

export default (): React.ReactElement => {
  const {authenticate} = useLocalAuth();

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.title}>Todo</Text>
          <Text style={styles.text}>Sign in to get started.</Text>
        </View>
        <Button
          testID="authButton"
          text={'Sign In'}
          onPress={authenticate}
          style={{backgroundColor: theme.constructive}}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '2%',
  },
  headingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...text.heading,
    marginBottom: '2%',
  },
  text: {
    ...text.subHeading,
    opacity: 0.5,
  },
});
