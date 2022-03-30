import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import Button from '@inputs/Button';
import {text, theme} from '@styles/commonStyles';
import useLocalAuth from '@hooks/useLocalAuth';
import useTodos from '@hooks/useTodos';
import {useState} from 'react';
import TodoModal from '@displays/todoModal';
import TodoCard from '@displays/todoCard';

// authorized view containing to-do functionality
export default (): React.ReactElement => {
  const [modalVisible, setVisible] = useState<boolean>(false);
  const [visibleItemId, setVisibleItemId] = useState<string | undefined>(
    undefined,
  );
  const {revokeAuth} = useLocalAuth();
  const {todoArray} = useTodos();

  const handleTodoPress = (id: string) => {
    setVisibleItemId(id);
    setVisible(true);
  };

  return (
    <View style={styles.container}>
      <TodoModal
        modalVisible={modalVisible}
        setVisible={setVisible}
        id={visibleItemId}
        resetId={() => setVisibleItemId(undefined)}
      />
      <Button
        text="Sign Out"
        style={styles.signOutButton}
        textStyle={styles.signOutButtonText}
        onPress={revokeAuth}
      />
      <FlatList
        style={styles.todoList}
        data={todoArray}
        keyExtractor={(item) => item[0]}
        renderItem={(todo: ListRenderItemInfo<typeof todoArray[0]>) => (
          <TodoCard
            id={todo.item[0]}
            title={todo.item[1].title}
            onPress={handleTodoPress}
          />
        )}
      />
      <Button
        text="Add Todo"
        style={styles.addTodoButton}
        onPress={() => setVisible(!modalVisible)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addTodoButton: {
    flexShrink: 1,
    alignSelf: 'center',
    backgroundColor: theme.constructive,
    alignItems: 'center',
    width: '80%',
    padding: 10,
    position: 'absolute',
    bottom: 20,
    zIndex: 10,
  },
  container: {
    flex: 1,
    padding: '2%',
    justifyContent: 'space-between',
  },
  signOutButton: {
    flexShrink: 1,
    alignSelf: 'flex-end',
    borderWidth: 1,
    alignItems: 'center',
    width: '25%',
    padding: 10,
  },
  modalCloseButton: {
    flexShrink: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    width: '15%',
    padding: 10,
  },
  signOutButtonText: {
    ...text.body,
  },
  todoList: {
    marginVertical: 30,
    marginHorizontal: 20,
  },
});
