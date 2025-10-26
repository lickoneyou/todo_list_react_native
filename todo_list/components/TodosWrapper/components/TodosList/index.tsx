import TodoItem           from '@/components/TodosWrapper/components/TodoItem';
import React              from 'react';
import { FlatList, View } from 'react-native';

import type { Todo } from '@/types';

interface ITodosList {
  todos: Todo[];
}

const TodosList: React.FC<ITodosList> = function(props) {
  const { todos } = props;

  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem id={item.id} isCompleted={item.isCompleted} title={item.title} />
        )}
      />
    </View>
  );
};

export default TodosList;