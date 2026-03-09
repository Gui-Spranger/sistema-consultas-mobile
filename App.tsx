import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Open up App.tsx to start working on your app!</Text>
      <Text style= {styles.subtitulo}> React Native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign:'center',
  },
  subtitulo: {
    color: "#ebebeb",
    fontSize: 18,
  }
});

