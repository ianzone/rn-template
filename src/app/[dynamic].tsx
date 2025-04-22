import { Link, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import { Container } from 'src/components';

export default function Page() {
  const { dynamic } = useLocalSearchParams<{ dynamic: string }>();
  return (
    <Container>
      <Text style={styles.subtitle}>This is a dynamic route '/*'</Text>
      <Text style={styles.subtitle}>slug: {dynamic}</Text>
      <Link style={styles.subtitle} href='/'>
        Back to Home
      </Link>
    </Container>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 30,
    color: '#38434D',
  },
});
