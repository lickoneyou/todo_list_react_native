import { COLORS }                 from '@/constants/colors';
import { StatusBar }              from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <StatusBar style={'light'} />
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:            1,
    justifyContent:  'center',
    alignItems:      'center',
    backgroundColor: COLORS.PRIMARY_BLACK,
  },
  text:      {
    color: COLORS.PRIMARY_WHITE,
  },
});
