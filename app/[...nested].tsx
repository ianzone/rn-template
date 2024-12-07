import { Link, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Page() {
  const { nested } = useLocalSearchParams<{ nested: string[] }>();
  return (
    <View>
      <Text style={styles.subtitle}>This is a nested route '/*/*'</Text>
      <Text style={styles.subtitle}>{JSON.stringify({ nested }, null, 2)}</Text>
      <Link style={styles.subtitle} href='/'>
        Back to index
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 30,
    color: '#38434D',
  },
});
