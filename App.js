import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import HomeScreen from './src/Pages/HomeScreen';
import { store } from './src/Redux_folder/configureStore';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};
export default App