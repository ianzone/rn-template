import { Link, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function Page() {
  const { dynamic } = useLocalSearchParams<{ dynamic: string }>();
  return (
    <View>
      <Text>This is a dynamic route '/*'</Text>
      <Text>slug: {dynamic}</Text>
      <Link href='/'>Back to index</Link>
    </View>
  );
}
