import React, { useCallback }                  from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

import type { ICurrentTodoAction } from '@/types';

interface ITodoModal {
  currentTodoAction: ICurrentTodoAction | null,
  isVisible: boolean,
  setVisible: (isVisible: boolean) => void,
}

const TodoModal: React.FC<ITodoModal> = function(props) {
  const {
          currentTodoAction,
          isVisible,
          setVisible,
        } = props;

  const onClose = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  return (
    <Modal
      animationType={'slide'}
      onRequestClose={onClose}
      visible={isVisible}
    >
      {currentTodoAction && currentTodoAction.type === 'edit' && (
        <View></View>
      )}
      {currentTodoAction && currentTodoAction.type === 'delete' && (
        <View>
          <Text>
            Are you sure you want to delete {'todo'}{' '}
            <Text>{`"${currentTodoAction?.title}"`}</Text>
          </Text>
          <View>
            <TouchableOpacity>
              <Text>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Modal>
  );
};

export default TodoModal;