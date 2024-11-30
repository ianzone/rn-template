import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { Counter } from 'src';

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Text style={styles.subtitle}>The route is '/'.</Text>
        <Counter />
        <Link style={styles.subtitle} href='/static'>
          Static Route
        </Link>
        <Link
          style={styles.subtitle}
          href={{
            pathname: '/[dynamic]',
            params: { dynamic: 'bacon' },
          }}
        >
          Dynamic Route
        </Link>
        <Link style={styles.subtitle} href='/nested/route'>
          Nested Route
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
});
