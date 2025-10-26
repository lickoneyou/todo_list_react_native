import React    from 'react';
import { Text } from 'react-native';

import { styles } from '@/components/TodosWrapper/components/TodosCount/styles';

interface ITodosCount {
  allTodosCount: number,
  completedTodosCount: number,
}

const TodosCount: React.FC<ITodosCount> = function(props) {
  const {
          allTodosCount,
          completedTodosCount,
        } = props;

  return (
    <Text style={styles.todos_counter}>{`${completedTodosCount}/${allTodosCount}`}</Text>
  );
};

export default TodosCount;