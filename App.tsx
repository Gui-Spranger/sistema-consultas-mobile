import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

type Consulta = {
  id: number;
  paciente: string;
  medico: string;
  data: string;
  status: "agendada" | "confirmada" | "cancelada" | "realizada";
}



export default function App() {
  const [consulta, setConsulta] = useState<Consulta>
 ({
    id: 1,
    paciente: "Carlos Andrade",
    medico: "Dr. Roberto Silva",
    data: "28/02/2026",
    status: "agendada",
  });
  function confirmarConsulta() {
    setConsulta({
      ...consulta, 
      status: "confirmada",
    });
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sistema de Consultas</Text>
      <Text style= {styles.subtitulo}> React Native</Text>
      <View style = {styles.card}>
        <Text>Paciente: {consulta.paciente}</Text>
        <Text>Médico: {consulta.medico} </Text>
        <Text>Data: {consulta.data}</Text>
        <Text>Status: {consulta.status}</Text>
        <View style = {styles.button}>
          {consulta.status === "agendada" && (
            <Button title='Confirmar Consulta' onPress={confirmarConsulta}/>
          )}
        </View>
      </View>
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
    marginBottom: 20
  },
    card: {
    width: "80%",
    color: "#ffffff",
    backgroundColor: "#2e2e2e",
    padding: 20,
    borderWidth: 1,
    borderRadius: 8,
  },
  button: {
    marginTop: 10,
  }

});

