import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { store } from './redux/store';

// components
import Home from './pages/home/Home';
import Pictures from './pages/pictures/Pictures';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{title: "Welcome to our gallery"}}/>
        <Stack.Screen name="Pictures" component={Pictures} />
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
