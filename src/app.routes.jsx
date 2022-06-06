import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Main from "./pages/Main"
import Inserir from "./pages/Inserir"
import Alterar from "./pages/Alterar"
import Listar from './pages/Listar'
import Buscar from "./pages/Buscar"

const App = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <App.Navigator initialRouteName='Main' >
        <App.Screen name='Main' component={Main} options={{
          headerShown: false
        }} />
        <App.Screen name='Inserir' component={Inserir} options={{
          headerShown: false
        }}/>
        <App.Screen name='Alterar' component={Alterar} options={{
          headerShown: false
        }}/>
        <App.Screen name='Listar' component={Listar} />
        <App.Screen name='Buscar' component={Buscar} />
      </App.Navigator>
    </NavigationContainer>
  );
}