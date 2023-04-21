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
import B from '../components/B'
import Li from '../components/Li'

import { RootStackScreenProps } from '../navigation/types'

const P4 = ({ navigation }: RootStackScreenProps<'P1'>) => (
  <>
    <HStack bg="primary.500" safeAreaTop pr="50px" alignItems="center">
      <IconButton
        icon={<Icon name="arrow-left" color="white" size="xl" />}
        onPress={() => navigation.navigate('Calculate')}
      />
      <Heading flex={1} textAlign="center" color="white">
        Risk of Aspiration
      </Heading>
    </HStack>
    <ScrollView>
      <View px={5} py="3">
        <P>
          Risk of aspiration is evaluated at the initial swallowing evaluation
          using the
          <B>Any 2 Scale</B> (Daniels et al. 1997). One point is given for each
          of the six items.
        </P>
        <P>
          <B>Any 2 Scale</B>
        </P>
        <Li>
          <B>Dysphonia</B> A voice disturbance in the parameters of vocal
          quality, pitch or intensity.
        </Li>
        <Li>
          <B>Dysarthria</B> A speech disorder resulting from disturbances in
          muscular control affecting the areas of respiration, articulation,
          phonation, resonance, or prosody.
        </Li>
        <Li>
          <B>Abnormal gag reflex</B> Either absent or weakend velar or
          pharyngeal wall contraction, unilaterally or bilaterally, in response
          to tactile stimulation of the posterior pharyngeal wall.
        </Li>
        <Li>
          <B>Abnormal volitional cough</B> A weak response, verbalized response,
          or no response on given the command to cough.
        </Li>
        <Li>
          <B>Cough after swallow</B> Cough immediate or within 1 minute of
          ingestion of calibrated volumes of water (5, 10, and 20ml presented in
          duplicate).
        </Li>
        <Li>
          <B>Voice change after swallow</B> Alteration in vocal quality
          following ingestion of calibrated volumes of water.
        </Li>
        <P>
          If a subjects cannot be evaluated due to severe impairment (i.e.
          reduced alertness, severe aphasia), a score of 6 points is given.
        </P>
        <Heading size="md" py={2}>
          Reference
        </Heading>
        <P>
          Reference: Daniels S, McAdam C, Brailey K, Foundas A. Clinical
          assessment of swallowing and prediction of dysphagia severity. Am J
          Speech Lang Pathol. 1997;6:17–24.
        </P>
      </View>
    </ScrollView>
  </>
)

export default P4
