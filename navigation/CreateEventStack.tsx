import React, { JSX } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CrearEventoScreen from '../screens/CrearEventoScreen';
import DetalleEventoScreen from '../screens/DetalleEventoScreen';

/**
 * @typedef {Object} CreateEventStackParamList
 * @property {undefined} CrearEvento - Pantalla para crear un evento.
 * @property {Object} DetalleEvento - Pantalla para ver los detalles de un evento.
 * @property {string} DetalleEvento.eventoId - ID del evento a mostrar.
 */
export type CreateEventStackParamList = {
    CrearEvento: undefined;
    DetalleEvento: { eventoId: string };
};

/**
 *  Stack de navegación para crear y ver detalles de eventos.
 */
const Stack = createNativeStackNavigator<CreateEventStackParamList>();

/**
 *  Componente principal del stack de creación de eventos.
 * @returns {JSX.Element} El stack de navegación con las pantallas de crear y ver detalles de eventos.
 */
export default function CreateEventStack(): JSX.Element {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="CrearEvento"
                component={CrearEventoScreen}
                options={{ title: 'Crear Evento' }}
            />
            <Stack.Screen
                name="DetalleEvento"
                component={DetalleEventoScreen}
                options={{ title: 'Detalle del Evento' }}
            />
        </Stack.Navigator>
    );
}
