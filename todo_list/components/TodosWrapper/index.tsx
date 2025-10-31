import TodoModal                          from '@/components/TodosWrapper/components/TodoModal';
import { useCallback, useMemo, useState } from 'react';
import { View }                           from 'react-native';

import type { Todo, ICurrentTodoAction } from '@/types';

import { styles } from '@/components/TodosWrapper/styles';

import TodosCount from '@/components/TodosWrapper/components/TodosCount';
import TodoInput  from '@/components/TodosWrapper/components/TodoInput';
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

  const [modalVisible, setModalVisible]           = useState(false);
  const [currentTodoAction, setCurrentTodoAction] = useState<ICurrentTodoAction | null>(null);
  const [todos, setTodos]                         = useState(defaultTodos);

  const addTodo = useCallback((todoValue: string) => {
    if (todoValue.trim()) {
      setTodos((prev) => (
        [
          {
            id:          new Date().getTime(),
            isCompleted: false,
            title:       todoValue,
          },
          ...prev,
        ]
      ));
    }
  }, []);

  const openModal = useCallback(() => {
    setModalVisible(true);
  }, []);

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
    <View style={styles.todos_wrapper}>
      <TodosCount
        allTodosCount={todos.length}
        completedTodosCount={todos.filter((todo) => todo.isCompleted).length}
      />
      <TodoInput
        addTodo={addTodo}
      />
      <TodosList
        openModal={openModal}
        setCurrentTodoAction={setCurrentTodoAction}
        todos={todos}
        updatedTodoCompleted={updatedTodoCompleted}
      />
      <TodoModal
        currentTodoAction={currentTodoAction}
        isVisible={modalVisible}
        setVisible={setModalVisible}
      />
    </View>
  );
};

export default TodosWrapper;