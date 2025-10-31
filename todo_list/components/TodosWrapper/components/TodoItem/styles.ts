import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants/colors';

export const styles = StyleSheet.create({
  todo_container:         {
    flexDirection:  'row',
    justifyContent: 'space-between',
    width:          '100%',
  },
  todo_wrapper:           {
    alignItems:    'center',
    flexDirection: 'row',
    gap:           15,
  },
  todo_title:             {
    color:    COLORS.PRIMARY_WHITE,
    fontSize: 20,
  },
  action_buttons_wrapper: {
    flexDirection: 'row',
    gap:           5,
  },
  action_button:          {
    alignItems:     'center',
    borderWidth:    1,
    height:         40,
    justifyContent: 'center',
    width:          40,
  },
  action_button_edit:     {
    backgroundColor: COLORS.PRIMARY_GREEN,
  },
  action_button_delete:   {
    backgroundColor: COLORS.PRIMARY_RED,
  },
});