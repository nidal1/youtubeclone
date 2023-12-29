import { StyleSheet, Text, View } from 'react-native';

export default function TabOneScreen() {
  return (
    <View className="flex-1 items-center justify-center dark:bg-layer-1">
      <Text>Tab One</Text>
      <View style={styles.separator} />
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
