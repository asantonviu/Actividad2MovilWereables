// 📁 screens/CrearEventoScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useEventos } from '../context/EventosContext';
import uuid from 'react-native-uuid';

export default function CrearEventoScreen(): JSX.Element {
  const [nombre, setNombre] = useState('');
  const [lugar, setLugar] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const { agregarEvento } = useEventos();

  const crearEvento = (): void => {
    if (nombre.trim() && lugar.trim()) {
      agregarEvento({ id: uuid.v4() as string, nombre, lugar, descripcion });

      Alert.alert(
        'Evento guardado',
        `El evento "${nombre}" ha sido guardado correctamente.`,
        [
          { text: 'Aceptar', onPress: () => console.log('Evento guardado') },
        ],
        { cancelable: false }
      );

      setNombre('');
      setLugar('');
      setDescripcion('');
    } else {
      Alert.alert(
        'Error',
        'Por favor, completa todos los campos requeridos.',
        [{ text: 'Aceptar', onPress: () => console.log('Error al guardar evento') }],
        { cancelable: false }
      );
    }
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
      <TextInput
        placeholder="Descripción (opcional)"
        style={styles.input}
        multiline
        numberOfLines={4}
        value={descripcion}
        onChangeText={setDescripcion}
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