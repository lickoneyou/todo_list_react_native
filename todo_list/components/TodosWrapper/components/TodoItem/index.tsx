import React          from 'react';
import { Text, View } from 'react-native';

import type { Todo } from '@/types';

import { styles } from '@/components/TodosWrapper/components/TodoItem/styles';

const TodoItem: React.FC<Todo> = function(props) {
  const {
          id,
          isCompleted,
          title,
        } = props;

  return (
    <View>
      <Text style={styles.todo_title}>{title}</Text>
    </View>
  );
};

export default TodoItem;