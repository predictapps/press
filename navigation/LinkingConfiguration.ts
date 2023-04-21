import { LinkingOptions } from '@react-navigation/native'
import * as Linking from 'expo-linking'

import { RootStackParamList } from './types'

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Calculate: {
        path: '',
      },
      P1: {
        path: 'age',
      },
      P2: {
        path: 'stroke-severity',
      },
      P3: {
        path: 'stroke-location',
      },
      P4: {
        path: 'risk-of-aspriration',
      },
      P5: {
        path: 'impairment-of-oral-intake',
      },
      Prediction: {
        path: 'prediction/:score',
      },
      Info: {
        path: 'info',
      },
      BottomTab: {
        screens: {
          About: {
            path: 'about',
          },
          Terms: {
            path: 'terms',
          },
        },
      },
      NotFound: '*',
    },
  },
}

export default linking
