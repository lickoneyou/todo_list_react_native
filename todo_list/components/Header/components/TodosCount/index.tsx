import { Text } from 'react-native';

import { styles } from '@/components/Header/components/TodosCount/styles';

const TodosCount = function() {
  return (
    <Text style={styles.todos_counter}>0/0</Text>
  );
};

export default TodosCount;