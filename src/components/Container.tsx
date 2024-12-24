import { StyleSheet, View } from 'react-native';

export function Container(props: { children: React.ReactNode }) {
  return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
