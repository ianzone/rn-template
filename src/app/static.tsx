import { Link } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import { Container } from 'src/components';

export default function Page() {
  return (
    <Container>
      <Text style={styles.subtitle}>This is a static route '/static'</Text>
      <Link href='/' style={styles.subtitle}>
        Back to index
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
