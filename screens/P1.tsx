import React from 'react'
import {
  Heading,
  HStack,
  Icon,
  IconButton,
  ScrollView,
  View,
} from 'native-base'

import P from '../components/P'

import { RootStackScreenProps } from '../navigation/types'

const P1 = ({ navigation }: RootStackScreenProps<'P1'>) => (
  <>
    <HStack bg="primary.500" safeAreaTop pr="50px" alignItems="center">
      <IconButton
        icon={<Icon name="arrow-left" color="white" size="xl" />}
        onPress={() => navigation.navigate('Calculate')}
      />
      <Heading flex={1} textAlign="center" color="white">
        Age
      </Heading>
    </HStack>
    <ScrollView>
      <View px={5} py="3">
        <P>Age at stroke onset is given in years.</P>
      </View>
    </ScrollView>
  </>
)

export default P1
