import { MaterialIcons }                     from '@expo/vector-icons';
import React, { useState }                   from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from '@/components/TodosWrapper/components/TodoInput/styles';

import { COLORS } from '@/constants/colors';

interface ITodoInput {
  addTodo: (todoValue: string) => void;
}

const TodoInput: React.FC<ITodoInput> = function(props) {
  const { addTodo } = props;

  const [inputValue, setInputValue] = useState('');

  return (
    <View style={styles.input_container}>
      <TextInput
        onChangeText={setInputValue}
        placeholder={'Add ToDo'}
        placeholderTextColor={COLORS.PRIMARY_WHITE}
        style={styles.todo_input}
      />
      <TouchableOpacity>
        <MaterialIcons
          color={COLORS.PRIMARY_WHITE}
          name={'plus-one'}
          onPress={() => addTodo(inputValue)}
          size={30}
          style={styles.add_button}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TodoInput;