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

const P5 = ({ navigation }: RootStackScreenProps<'P1'>) => (
  <>
    <HStack bg="primary.500" safeAreaTop pr="50px" alignItems="center">
      <IconButton
        icon={<Icon name="arrow-left" color="white" size="xl" />}
        onPress={() => navigation.navigate('Calculate')}
      />
      <Heading flex={1} textAlign="center" color="white">
        Impairment of oral intake
      </Heading>
    </HStack>
    <ScrollView>
      <View px={5} py="3">
        <P>
          Initial impairment of oral intake is measured with the
          <B>Functional Oral Intake Scale (FOIS)</B>. The evaluation is based on
          the level of oral intake or food and liquid consistency recommended by
          the initial objective swallow assessment.
        </P>
        <P>
          <B>Functional Oral Intake Scale (FOIS)</B>
        </P>

        <Li>
          <B>Level 1</B> Nothing by mouth.
        </Li>
        <Li>
          <B>Level 2</B> Tube dependent with minimal attempts of food or liquid.
        </Li>
        <Li>
          <B>Level 3</B> Tube dependent with consistent oral intake of food or
          liquid.
        </Li>
        <Li>
          <B>Level 4</B> Total oral diet of a single consistency.
        </Li>
        <Li>
          <B>Level 5</B> Total oral diet with multiple consistencies, but
          requiring special preparation or compensations.
        </Li>
        <Li>
          <B>Level 6</B> Total oral diet with multiple consistencies without
          special preparation, but with specific food limitations.
        </Li>
        <Li>
          <B>Level 7</B> Total oral diet with no restrictions.
        </Li>
        <Heading size="md" py={2}>
          Reference
        </Heading>
        <P>
          Reference: Initial psychometric assessment of a functional oral intake
          scale for dysphagia in stroke patients. Crary MA, Mann GD, Groher ME.
          Arch Phys Med Rehabil. 2005 Aug;86(8):1516-20.
        </P>
      </View>
    </ScrollView>
  </>
)

export default P5
