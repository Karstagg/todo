import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {text, theme} from '@styles/commonStyles';

type TodoCardProps = {
  id: string;
  title: string;
  onPress: (id: string) => void;
};
export default ({id, title, onPress}: TodoCardProps): React.ReactElement => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => onPress(id)}>
      <View style={styles.bullet} />
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexGrow: 1,
    height: 60,
    flexDirection: 'row',
    backgroundColor: theme.bgColorDarker,
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  bullet: {
    borderRadius: 100,
    backgroundColor: theme.neutral,
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginRight: 10,
  },
  title: {
    ...text.subHeading,
    overflow: 'hidden',
    alignSelf: 'center',
  },
});
