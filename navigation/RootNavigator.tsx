import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Calculate from '../screens/Calculate'
import NotFound from '../screens/NotFound'
import { RootStackParamList } from './types'
import P1 from '../screens/P1'
import P2 from '../screens/P2'
import P3 from '../screens/P3'
import P4 from '../screens/P4'
import P5 from '../screens/P5'
import BottomTabNavigator from './BottomTabNavigator'
import Prediction from '../screens/Prediction'

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Calculate" component={Calculate} />
      <Stack.Screen name="P1" component={P1} options={{ title: 'Age' }} />
      <Stack.Screen
        name="P2"
        component={P2}
        options={{ title: 'Stroke severity' }}
      />
      <Stack.Screen
        name="P3"
        component={P3}
        options={{ title: 'Stroke location' }}
      />
      <Stack.Screen
        name="P4"
        component={P4}
        options={{ title: 'Risk of Aspiration' }}
      />
      <Stack.Screen
        name="P5"
        component={P5}
        options={{ title: 'Impairment of oral intake' }}
      />
      <Stack.Screen name="Prediction" component={Prediction} />
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFound} />
    </Stack.Group>
  </Stack.Navigator>
)

export default RootNavigator
