import TodoItem           from '@/components/TodosWrapper/components/TodoItem';
import { styles }         from '@/components/TodosWrapper/components/TodosList/styles';
import React              from 'react';
import { FlatList, View } from 'react-native';

import type { Todo, ICurrentTodoAction } from '@/types';

interface ITodosList {
  openModal: () => void;
  todos: Todo[];
  setCurrentTodoAction: (action: ICurrentTodoAction) => void;
  updatedTodoCompleted: (id: number) => void;
}

const TodosList: React.FC<ITodosList> = function(props) {
  const {
          openModal,
          todos,
          setCurrentTodoAction,
          updatedTodoCompleted,
        } = props;

  return (
    <View style={styles.todos_list}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem
            id={item.id}
            isCompleted={item.isCompleted}
            openModal={openModal}
            setCurrentTodoAction={setCurrentTodoAction}
            title={item.title}
            updatedTodoCompleted={updatedTodoCompleted}
          />
        )}
      />
    </View>
  );
};

export default TodosList;