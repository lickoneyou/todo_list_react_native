import { styles }                         from '@/components/TodosWrapper/styles';
import { useCallback, useMemo, useState } from 'react';
import { View }                           from 'react-native';

import type { Todo } from '@/types';

import TodosCount from '@/components/TodosWrapper/components/TodosCount';
import TodosList  from '@/components/TodosWrapper/components/TodosList';

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

  const [todos, setTodos] = useState(defaultTodos);

  const updatedTodoCompleted = useCallback((id: number) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return ({
            ...todo,
            isCompleted: !todo.isCompleted,
          });
        }
        return todo;
      });
    });
  }, []);

  return (
    <View style={styles.todos_list_container}>
      <TodosCount
        allTodosCount={todos.length}
        completedTodosCount={todos.filter((todo) => todo.isCompleted).length}
      />
      <TodosList
        updatedTodoCompleted={updatedTodoCompleted}
        todos={todos}
      />
    </View>
  );
};

export default TodosWrapper;