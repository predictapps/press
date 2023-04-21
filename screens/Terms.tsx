import React from 'react'
import * as Application from 'expo-application'
import {
  Heading,
  HStack,
  Icon,
  IconButton,
  ScrollView,
  VStack,
  Text,
} from 'native-base'

import { BottomTabScreenProps } from '../navigation/types'
import P from '../components/P'
import Constants from 'expo-constants'

const Terms = ({ navigation }: BottomTabScreenProps<'Terms'>) => (
  <>
    <HStack bg="primary.500" safeAreaTop alignItems="center" pr="50px">
      <IconButton
        icon={<Icon name="arrow-left" color="white" size="xl" />}
        onPress={() => navigation.navigate('Calculate')}
      />
      <Heading flex={1} textAlign="center" color="white" isTruncated>
        Terms &amp; Conditions
      </Heading>
    </HStack>
    <ScrollView p="5">
      <VStack safeAreaBottom>
        <Heading size="md"></Heading>
        <P>
          PRESS (Predictive Swallowing Score) is a prediction tool applicable to
          people who suffered an ischaemic stroke leading to impaired oral
          intake. Given some clinical characteristics, it provides estimates of
          the probability to recover oral intake or return to prestroke diet 7
          or 30 days after stroke.
        </P>
        <P>
          This tool is meant to be used only by medical professionals to improve
          prognostication of dysphagia recovery after stroke. Its clinical
          usefulness to influence medical decisions has not been tested.
        </P>
        <P>
          By accepting these terms, the user agrees on the nature and purpose of
          this prediction tool.
        </P>
      </VStack>
      <Text textAlign="center" color="gray.400">
        {Constants.expoConfig?.version}
      </Text>
      <Text textAlign="center" color="gray.400">
        {Application.nativeBuildVersion}
      </Text>
      <Text textAlign="center" color="gray.400">
        {Application.nativeApplicationVersion}
      </Text>
    </ScrollView>
  </>
)

export default Terms
