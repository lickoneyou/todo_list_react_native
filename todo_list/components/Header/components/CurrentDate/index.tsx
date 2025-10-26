import { Text } from 'react-native';

import { styles } from '@/components/Header/components/CurrentDate/styles';

const CurrentDate = function() {
  return (
    <Text style={styles.date_text}>
      {new Intl.DateTimeFormat('en-US').format(new Date)}
    </Text>
  );
};

export default CurrentDate;