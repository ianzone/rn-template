import { Link, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function Page() {
  const { nested } = useLocalSearchParams<{ nested: string[] }>();
  return (
    <View>
      <Text>This is a nested route '/*/*'</Text>
      <Text>{JSON.stringify({ nested }, null, 2)}</Text>
      <Link href='/'>Back to index</Link>
    </View>
  );
}
