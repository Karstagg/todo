import {StyleSheet, Text, TouchableHighlight, ViewStyle} from 'react-native';
import {text} from '../style/commonStyles';

type ButtonProps = {
  text: string;
  onPress: () => void;
  style?: ViewStyle;
};

export default ({text, onPress, style}: ButtonProps): React.ReactElement => {
  return (
    <TouchableHighlight style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    padding: 20,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
  },
  text: {
    ...text.subHeading,
    fontWeight: 'bold',
  },
});
