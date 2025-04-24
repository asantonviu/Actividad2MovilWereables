import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function CrearEventoScreen(): JSX.Element {
  const [nombre, setNombre] = useState('');
  const [lugar, setLugar] = useState('');

  const crearEvento = (): void => {
    console.log(`Evento creado: ${nombre} en ${lugar}`);
    // lógica para guardar el evento o llamar API
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Nuevo Evento</Text>
      <TextInput
        placeholder="Nombre del evento"
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        placeholder="Lugar"
        style={styles.input}
        value={lugar}
        onChangeText={setLugar}
      />
      <TouchableOpacity style={styles.button} onPress={crearEvento}>
        <Text style={styles.buttonText}>Guardar Evento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 8 },
  button: { backgroundColor: '#2196F3', padding: 12, borderRadius: 8 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
});
