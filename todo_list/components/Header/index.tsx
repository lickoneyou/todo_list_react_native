import { Text, View }   from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from '@/components/Header/styles';

import CurrentDate from '@/components/Header/components/CurrentDate';

const Header = function() {
  return (
    <SafeAreaView
      edges={['top']}
      style={styles.header_container}
    >
      <Text style={styles.header_title}>{'Todo List'}</Text>
      <View style={styles.header_wrapper}>
        <CurrentDate />
      </View>
    </SafeAreaView>
  );
};

export default Header;