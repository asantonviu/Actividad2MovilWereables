import React, { JSX } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetalleEventoScreen from '../screens/DetalleEventoScreen';

/**
 * @typedef {Object} HomeStackParamList
 * @property {undefined} Inicio - Pantalla de inicio.
 * @property {Object} DetalleEvento - Pantalla de detalles del evento.
 * @property {string} DetalleEvento.evento.id - ID del evento.
 * @property {string} DetalleEvento.evento.nombre - Nombre del evento.
 * @property {string} DetalleEvento.evento.lugar - Lugar del evento.
 */
export type HomeStackParamList = {
  Inicio: undefined;
  DetalleEvento: { evento: { id: string; nombre: string; lugar: string } };
};

/**
 *  Stack de navegación para la pantalla de inicio y detalles de eventos.
 */
const Stack = createNativeStackNavigator<HomeStackParamList>();

/**
 *  Componente principal del stack de inicio.
 * @returns {JSX.Element} El stack de navegación con las pantallas de inicio y detalles de eventos.
 */
export default function HomeStack(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={HomeScreen} />
      <Stack.Screen name="DetalleEvento" component={DetalleEventoScreen} options={{ title: 'Detalle Evento' }} />
    </Stack.Navigator>
  );
}
