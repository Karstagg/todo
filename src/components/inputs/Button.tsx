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
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export default ({
  text,
  onPress,
  style,
  textStyle,
}: ButtonProps): React.ReactElement => {
  return (
    <TouchableHighlight style={[styles.container, style]} onPress={onPress}>
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
