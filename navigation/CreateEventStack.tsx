// 📁 navigation/CreateEventStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CrearEventoScreen from '../screens/CrearEventoScreen';
import DetalleEventoScreen from '../screens/DetalleEventoScreen'; // si se usa en este stack

export type CreateEventStackParamList = {
    CrearEvento: undefined;
    DetalleEvento: { eventoId: string };
};

const Stack = createNativeStackNavigator<CreateEventStackParamList>();

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
