import { MaterialIcons }                from '@expo/vector-icons';
import React, { useCallback }           from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import type { Todo, ICurrentTodoAction } from '@/types';

import { styles } from '@/components/TodosWrapper/components/TodoItem/styles';

import { COLORS } from '@/constants/colors';

interface ITodoItem extends Todo {
  openModal: () => void;
  setCurrentTodoAction: (action: ICurrentTodoAction) => void;
  updatedTodoCompleted: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = function(props) {
  const {
          id,
          isCompleted,
          openModal,
          setCurrentTodoAction,
          title,
          updatedTodoCompleted,
        } = props;

  const openModalHandle = useCallback((type: 'edit' | 'delete') => {
    openModal();
    setCurrentTodoAction({
      id,
      title,
      type,
    });
  }, [id, openModal, setCurrentTodoAction, title]);

  return (
    <View style={styles.todo_container}>
      <View style={styles.todo_wrapper}>
        <MaterialIcons
          color={isCompleted ? COLORS.PRIMARY_GREEN : COLORS.PRIMARY_WHITE}
          name={isCompleted ? 'check-circle' : 'radio-button-unchecked'}
          onPress={() => updatedTodoCompleted(id)}
          size={20}
        />
        <Text
          style={[
            styles.todo_title,
            isCompleted && { textDecorationLine: 'line-through' },
          ]}
        >
          {title}
        </Text>
      </View>
      <View style={styles.action_buttons_wrapper}>
        <TouchableOpacity
          onPress={() => openModalHandle('edit')}
          style={[styles.action_button, styles.action_button_edit]}
        >
          <MaterialIcons
            color={COLORS.PRIMARY_WHITE}
            name={'edit-note'}
            size={30}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openModalHandle('delete')}
          style={[styles.action_button, styles.action_button_delete]}
        >
          <MaterialIcons
            color={COLORS.PRIMARY_WHITE}
            name={'delete'}
            size={30}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoItem;