import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../navigation/HomeStack';

type Props = NativeStackScreenProps<HomeStackParamList, 'DetalleEvento'>;

export default function DetalleEventoScreen({ route }: Props): JSX.Element {
  const { evento } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{evento.nombre}</Text>
      <Text style={styles.subtitle}>Lugar: {evento.lugar}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { fontSize: 18, marginTop: 10 },
});
