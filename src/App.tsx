import { StyleSheet, Text, View } from 'react-native';
import { Counter } from 'src/components';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
