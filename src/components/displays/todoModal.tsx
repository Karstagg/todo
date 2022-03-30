import {Modal, StyleSheet, Text, TextInput, View} from 'react-native';
import Button from '@inputs/Button';
import {text, theme} from '@styles/commonStyles';
import {useEffect, useState} from 'react';
import useTodos from '@hooks/useTodos';

type TodoModalProps = {
  id?: string;
  modalVisible: boolean;
  setVisible: (value: boolean) => void;
  resetId: () => void;
};

export default ({
  id,
  modalVisible,
  resetId,
  setVisible,
}: TodoModalProps): React.ReactElement => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const {addTodoListItem, removeTodoListItem, editTodoListItem, getTodoByID} =
    useTodos();

  const selectedTodo = id && getTodoByID(id);

  useEffect(() => {
    if (!selectedTodo) return;
    setTitle(selectedTodo.title);
    setContent(selectedTodo.content);
  }, [selectedTodo]);

  const clearModalState = () => {
    setTitle('');
    setContent('');
    resetId();
  };

  const handleModalClose = () => {
    setVisible(false);
    clearModalState();
  };

  const handleSaveTodo = () => {
    if (!id) {
      addTodoListItem({title, content});
    } else {
      editTodoListItem({[id]: {title, content}});
    }
    handleModalClose();
  };

  const handleDeleteTodo = () => {
    if (!id) return;
    removeTodoListItem(id);
    handleModalClose();
  };

  return (
    <Modal
      testID={'todoModal'}
      transparent
      style={styles.modalContainer}
      visible={modalVisible}>
      <View style={styles.modalContainer}>
        <Button
          text="✖️"
          style={styles.modalCloseButton}
          textStyle={{color: 'black'}}
          onPress={handleModalClose}
        />
        <Text testID={'todoTitle'} numberOfLines={1} style={styles.modalTitle}>
          {title || 'Todo List Item'}
        </Text>
        <View style={[styles.textInputContainer, {flexDirection: 'row'}]}>
          <Text style={{...text.body, marginRight: 4}}>Title:</Text>
          <TextInput
            testID={'todoTitleInput'}
            style={[styles.textInput, {height: 50}]}
            value={title}
            onChangeText={(newText) => setTitle(newText)}
            placeholder={'Enter a title'}
            placeholderTextColor={theme.bgColorDarker}
          />
        </View>
        <View style={styles.textAreaContainer}>
          <TextInput
            testID={'todoContentInput'}
            multiline
            value={content}
            onChangeText={(newText) => setContent(newText)}
            style={styles.textInput}
            placeholder={'Enter todo item details'}
            placeholderTextColor={theme.bgColorDarker}
          />
        </View>
        <View style={styles.buttonGroupContainer}>
          <Button
            testID={'saveTodoButton'}
            disabled={!title}
            text="Save"
            style={[
              styles.saveTodoButton,
              {
                backgroundColor: title
                  ? theme.constructive
                  : theme.constructiveTransparent,
              },
            ]}
            onPress={handleSaveTodo}
          />
          {id !== undefined && (
            <Button
              testID={'deleteTodoButton'}
              text="Delete"
              style={styles.deleteTodoButton}
              onPress={handleDeleteTodo}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  buttonGroupContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: '80%',
    marginBottom: 20,
  },
  saveTodoButton: {
    flexGrow: 1,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
  },
  deleteTodoButton: {
    flexShrink: 1,
    alignSelf: 'center',
    backgroundColor: theme.destructive,
    alignItems: 'center',
    padding: 10,
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    borderRadius: 10,
    marginVertical: '15%',
    marginHorizontal: '5%',
    backgroundColor: theme.bgColorDarker,
  },
  modalCloseButton: {
    flexShrink: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    width: '15%',
    padding: 10,
  },
  modalTitle: {
    ...text.subHeading,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  textInputContainer: {
    alignItems: 'center',
    margin: '5%',
  },
  textAreaContainer: {
    flex: 1,
    margin: '5%',
  },
  textInput: {
    backgroundColor: theme.bgColor,
    color: theme.textColor,
    borderRadius: 10,
    flexGrow: 1,
    padding: 2,
  },
});
