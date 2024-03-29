import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableHighlight,
  ViewStyle,
} from 'react-native';
import {text} from '@styles/commonStyles';

type ButtonProps = {
  text: string;
  onPress: () => void;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle;
  disabled?: boolean;
  testID?: string;
};

// a custom button
export default ({
  text,
  onPress,
  style,
  textStyle,
  disabled,
  testID,
}: ButtonProps): React.ReactElement => {
  return (
    <TouchableHighlight
      testID={testID}
      disabled={disabled}
      style={[styles.container, style]}
      onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
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
