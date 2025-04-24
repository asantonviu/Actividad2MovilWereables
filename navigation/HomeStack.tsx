import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetalleEventoScreen from '../screens/DetalleEventoScreen';

export type HomeStackParamList = {
  Inicio: undefined;
  DetalleEvento: { evento: { id: string; nombre: string; lugar: string } };
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={HomeScreen} />
      <Stack.Screen name="DetalleEvento" component={DetalleEventoScreen} />
    </Stack.Navigator>
  );
}
