import React, { JSX, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useEventos } from '../context/EventosContext';
import uuid from 'react-native-uuid';

/**
 *  Pantalla para crear un nuevo evento.
 * Permite al usuario ingresar el nombre, lugar y descripción del evento,
 * así como seleccionar una imagen de la galería.
 * @returns {JSX.Element} Componente de pantalla para crear un evento.
 */
export default function CrearEventoScreen(): JSX.Element {
  const [nombre, setNombre] = useState('');
  const [lugar, setLugar] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagenUri, setImagenUri] = useState<string | null>(null);
  const { agregarEvento } = useEventos();

  /**
   *  Función para seleccionar una imagen de la galería.
   * Solicita permisos y actualiza el estado con la URI de la imagen seleccionada.
   */
  const seleccionarImagen = async () => {
    const permiso = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permiso.granted) {
      Alert.alert('Permiso denegado', 'No se puede acceder a la galería de imágenes.');
      return;
    }

    /**
     *  Lanza el selector de imágenes de la galería.
     */
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    console.log('Resultado de la selección de imagen:', resultado);
    if (!resultado.canceled && resultado.assets && resultado.assets.length > 0) {
      setImagenUri(resultado.assets[0].uri);
    }
  }

  /**
   * *  Función para crear un nuevo evento.
   */
  const crearEvento = (): void => {
    if (nombre.trim() && lugar.trim()) {
      agregarEvento({ id: uuid.v4() as string, nombre, lugar, descripcion, imagenUri });

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
      setImagenUri(null);
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
      <TouchableOpacity style={styles.imageButton} onPress={seleccionarImagen}>
        <Text style={styles.imageButtonText}>
          {imagenUri ? 'Cambiar imagen' : 'Seleccionar imagen'}
        </Text>
      </TouchableOpacity>

      {imagenUri && <Image source={{ uri: imagenUri }} style={styles.imagePreview} />}

      <TouchableOpacity style={styles.button} onPress={crearEvento}>
        <Text style={styles.buttonText}>Guardar Evento</Text>
      </TouchableOpacity>
    </View>
  );
}

/**
 *  Estilos para el componente CrearEventoScreen.
 */
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 8 },
  button: { backgroundColor: '#2196F3', padding: 12, borderRadius: 8, marginTop: 10 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  imageButton: { padding: 10, backgroundColor: '#eee', borderRadius: 8, marginBottom: 10 },
  imageButtonText: { textAlign: 'center' },
  imagePreview: { width: '100%', height: 200, borderRadius: 8, marginTop: 10 },
});