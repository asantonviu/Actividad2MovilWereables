// 📁 screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useEventos } from '../context/EventosContext';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';

export default function HomeScreen(): JSX.Element {
    const { eventos } = useEventos();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Eventos en tu ciudad</Text>
            {eventos.length === 0 ? (
                <Text style={styles.vacio}>No hay eventos registrados aún.</Text>
            ) : (
                <FlatList
                    data={eventos}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.evento}
                            onPress={() => navigation.navigate('DetalleEvento', { eventoId: item.id })}
                        >
                            <Text style={styles.nombre}>{item.nombre}</Text>
                            <Text style={styles.lugar}>{item.lugar}</Text>
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    vacio: { fontSize: 16, color: 'gray' },
    evento: { backgroundColor: '#eee', padding: 15, marginBottom: 10, borderRadius: 10 },
    nombre: { fontSize: 18, fontWeight: '600' },
    lugar: { fontSize: 16, color: '#555' },
});
