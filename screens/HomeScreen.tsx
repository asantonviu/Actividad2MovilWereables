import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../navigation/HomeStack';

const eventos = [
  { id: '1', nombre: 'Concierto en el parque', lugar: 'Parque Central' },
  { id: '2', nombre: 'Feria de artesanía', lugar: 'Plaza Mayor' },
];

type Props = NativeStackScreenProps<HomeStackParamList, 'Inicio'>;

export default function HomeScreen({ navigation }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <FlatList
        data={eventos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('DetalleEvento', { evento: item })}
          >
            <View style={styles.card}>
              <Text style={styles.title}>{item.nombre}</Text>
              <Text>{item.lugar}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: { padding: 15, marginVertical: 10, backgroundColor: '#f1f1f1', borderRadius: 10 },
  title: { fontSize: 18, fontWeight: 'bold' },
});
