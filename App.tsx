import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from './navigation/HomeStack';
import { EventosProvider } from './context/EventosContext';
import CreateEventStack from './navigation/CreateEventStack';

export type RootTabParamList = {
  Inicio: undefined;
  'Crear Evento': undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App(): JSX.Element {
  return (
    <EventosProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = '';

              if (route.name === 'Inicio') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Crear Evento') {
                iconName = focused ? 'add-circle' : 'add-circle-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#2196F3',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Inicio" component={HomeStack} />
          <Tab.Screen name="Crear Evento" component={CreateEventStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </EventosProvider>
  );
}