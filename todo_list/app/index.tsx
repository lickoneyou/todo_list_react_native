import TodosWrapper         from '@/components/TodosWrapper';
import { StatusBar }        from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';

import Header     from '@/components/Header';
import { COLORS } from '@/constants/colors';

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <StatusBar style={'light'} />
      <Header />
      <TodosWrapper />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:            1,
    justifyContent:  'flex-start',
    alignItems:      'center',
    backgroundColor: COLORS.PRIMARY_BLACK,
  },
  text:      {
    color: COLORS.PRIMARY_WHITE,
  },
});
