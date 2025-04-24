import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './navigation/HomeStack';
import CreateEventScreen from './screens/CrearEventoScreen';

export type RootTabParamList = {
  Inicio: undefined;
  'Crear Evento': undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Inicio" component={HomeStack} />
        <Tab.Screen name="Crear Evento" component={CreateEventScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}