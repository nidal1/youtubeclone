import { StyleSheet, Text, View } from 'react-native';
import { HomeFeed, MainTabs } from '../../components';

export default function TabOneScreen() {
  return (
    <View className="flex-1 dark:bg-layer-1">
      <MainTabs />
      <HomeFeed />
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
