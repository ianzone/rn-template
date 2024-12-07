import { Button, StyleSheet, Text, View } from 'react-native';
import { useCounter } from 'src/hooks';

interface CounterProps {
  init?: number;
}

export function Counter(props: CounterProps) {
  const { count, increment } = useCounter(props.init);

  return (
    <View style={styles.css}>
      <Text testID='count'>count: {count}</Text>
      <Button testID='incButton' title='Increment' onPress={() => increment()} />
    </View>
  );
}

const styles = StyleSheet.create({
  css: { alignItems: 'center', backgroundColor: 'yellow' },
});
