import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants/colors';

export const styles = StyleSheet.create({
  add_button:      {
    backgroundColor: COLORS.PRIMARY_GREEN,
    borderRadius:    8,
    borderWidth:     1,
    height:          40,
    width:           40,
  },
  input_container: {
    alignItems:    'center',
    flexDirection: 'row',
  },
  todo_input:      {
    borderColor:  COLORS.PRIMARY_WHITE,
    borderRadius: 8,
    borderWidth:  1,
    color:        COLORS.PRIMARY_WHITE,
    flex:         1,
  },
});