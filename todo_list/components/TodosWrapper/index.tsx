import { useMemo } from 'react';
import { View }    from 'react-native';

import type { Todo } from '@/types'

import TodosList from '@/components/TodosWrapper/components/TodosList';

const TodosWrapper = function() {
  const defaultTodos: Todo[] = useMemo(() => {
    return [
      {
        id:          1,
        isCompleted: false,
        title:       'todo 1',
      },
      {
        id:          2,
        isCompleted: true,
        title:       'todo 2',
      },
      {
        id:          3,
        isCompleted: false,
        title:       'todo 3',
      },
    ];
  }, []);

  return (
    <View>
      <TodosList todos={defaultTodos} />
    </View>
  );
};

export default TodosWrapper;