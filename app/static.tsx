import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Page() {
  return (
    <View>
      <Text style={styles.subtitle}>This is a static route '/static'</Text>
      <Link href='/' style={styles.subtitle}>
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
