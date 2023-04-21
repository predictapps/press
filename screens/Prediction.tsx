import React from 'react'
import {
  Heading,
  IconButton,
  Icon,
  HStack,
  ScrollView,
  Text,
  VStack,
} from 'native-base'

import { RootStackScreenProps } from '../navigation/types'
import GaugeProps from '../components/Gauge'
import estimate from '../services/estimate'

const Prediction = ({
  navigation,
  route,
}: RootStackScreenProps<'Prediction'>) => {
  const { score } = route.params
  const { impairiedMonth, impairiedWeek, noReturnMonth, noReturnWeek } =
    estimate(score)
  return (
    <>
      <HStack safeAreaTop bg="primary.500" pr="50px">
        <IconButton
          icon={<Icon name="arrow-left" color="white" size="xl" />}
          onPress={() => navigation.navigate('Calculate')}
        />
        <Heading alignSelf="center" flex={1} textAlign="center" color="white">
          PRESS {score} points
        </Heading>
      </HStack>
      <ScrollView px="3">
        <Heading size="lg" pt="7">
          Probability of impaired oral intake
        </Heading>
        <HStack justifyContent="space-around">
          <VStack alignItems="center">
            <Heading size="md" py="5">
              Day 7
            </Heading>
            <GaugeProps {...impairiedWeek} />
          </VStack>
          <VStack alignItems="center">
            <Heading size="md" py="5">
              Day 30
            </Heading>
            <GaugeProps {...impairiedMonth} />
          </VStack>
        </HStack>
        <Heading size="md" pt="7">
          No return to prestroke diet
        </Heading>
        <HStack justifyContent="space-around">
          <VStack alignItems="center">
            <Heading size="md" py="5">
              Day 7
            </Heading>
            <GaugeProps {...noReturnWeek} />
          </VStack>
          <VStack alignItems="center">
            <Heading size="md" py="5">
              Day 30
            </Heading>
            <GaugeProps {...noReturnMonth} />
          </VStack>
        </HStack>
      </ScrollView>
    </>
  )
}

export default Prediction
