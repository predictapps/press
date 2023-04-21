import React from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'

import LinkingConfiguration from './LinkingConfiguration'
import RootNavigator from './RootNavigator'
import { theme } from '../NativeBase'
import { Platform } from 'react-native'

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary[500],
  },
}

const Navigation = () => (
  <NavigationContainer
    linking={Platform.OS === 'web' ? undefined : LinkingConfiguration}
    theme={myTheme}
  >
    <RootNavigator />
  </NavigationContainer>
)

export default Navigation
