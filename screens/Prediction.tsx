import React from 'react'
import {
  Heading,
  IconButton,
  Icon,
  HStack,
  ScrollView,
  VStack,
  Box,
} from 'native-base'

import { RootStackScreenProps } from '../navigation/types'
import estimate from '../services/estimate'
import GaugeProps from '../components/Gauge'

const Prediction = ({
  navigation,
  route,
}: RootStackScreenProps<'Prediction'>) => {
  const { score } = route.params
  const { impairiedMonth, impairiedWeek, noReturnMonth, noReturnWeek } =
    estimate(score)
  return (
    <>
      <HStack safeAreaTop bg="primary.500">
        <IconButton
          icon={<Icon name="arrow-left" color="white" size="xl" />}
          onPress={() => navigation.navigate('Calculate')}
        />
        <Heading alignSelf="center" flex={1} textAlign="center" color="white">
          PRESS {score} points
        </Heading>
        <IconButton
          icon={<Icon name="help-circle" color="white" size="xl" />}
          onPress={() => navigation.navigate('Info')}
        />
      </HStack>
      <Box safeAreaBottom>
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
      </Box>
    </>
  )
}

export default Prediction
