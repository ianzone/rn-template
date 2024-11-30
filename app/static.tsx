import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Page() {
  return (
    <View>
      <Text>This is a static route '/static'</Text>
      <Link href='/'>Back to index</Link>
    </View>
  );
}
