import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants/colors';

export const styles = StyleSheet.create({
  header_container: {
    alignItems:      'center',
    paddingVertical: 20,
    width:           '100%',
  },
  header_title:     {
    color:      COLORS.PRIMARY_WHITE,
    fontSize:   25,
    fontWeight: 600,
  },
  header_wrapper:   {
    alignItems: 'flex-start',
    width:      '100%',
  },
});