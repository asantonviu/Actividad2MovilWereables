// 📁 screens/DetalleEventoScreen.tsx
import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useEventos } from '../context/EventosContext';
import type { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../navigation/types';

type DetalleEventoRouteProp = RouteProp<RootStackParamList, 'DetalleEvento'>;

export default function DetalleEventoScreen(): JSX.Element {
  const { eventoId } = useRoute<DetalleEventoRouteProp>().params;
  const { eventos } = useEventos();
  const evento = eventos.find((e) => e.id === eventoId);

  if (!evento) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Evento no encontrado</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{evento.nombre}</Text>
      <Text style={styles.subtitulo}>Lugar: {evento.lugar}</Text>
      {evento.descripcion?.trim() ? (
        <Text style={styles.descripcion}>Descripción: {evento.descripcion}</Text>
      ) : null}
      {evento.imagenUri && (
        <Image source={{ uri: evento.imagenUri }} style={styles.image} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  subtitulo: { fontSize: 18, marginBottom: 10 },
  image: { width: '100%', height: 250, borderRadius: 10, marginVertical: 15 },
  descripcion: { fontSize: 16, color: '#555' },

});
