import { StyleSheet, Text, View } from 'react-native';
import { MainTabs } from '../../components';

export default function TabOneScreen() {
  return (
    <View className="flex-1 dark:bg-layer-1">
      <MainTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
