import { MaterialIcons } from '@expo/vector-icons';
import React             from 'react';
import { Text, View }    from 'react-native';

import type { Todo } from '@/types';

import { styles } from '@/components/TodosWrapper/components/TodoItem/styles';

import { COLORS } from '@/constants/colors';

interface ITodoItem extends Todo {
  updatedTodoCompleted: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = function(props) {
  const {
          id,
          isCompleted,
          title,
          updatedTodoCompleted,
        } = props;

  return (
    <View style={styles.todo_container}>
      <MaterialIcons
        color={isCompleted ? COLORS.PRIMARY_GREEN : COLORS.PRIMARY_WHITE}
        name={isCompleted ? 'check-circle' : 'radio-button-unchecked'}
        onPress={() => updatedTodoCompleted(id)}
        size={14}
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
  );
};

export default TodoItem;