import React from 'react'
import { Box, Heading, HStack, Icon, IconButton, ScrollView } from 'native-base'

import { RootStackScreenProps } from '../navigation/types'
import P from '../components/P'
import B from '../components/B'

const Info = ({ navigation }: RootStackScreenProps<'Info'>) => (
  <>
    <HStack bg="primary.500" safeAreaTop pr="50px" alignItems="center">
      <IconButton
        icon={<Icon name="arrow-left" color="white" size="xl" />}
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack()
          } else {
            navigation.navigate('Calculate')
          }
        }}
      />
      <Heading flex={1} textAlign="center" color="white">
        Predicted values
      </Heading>
    </HStack>

    <ScrollView px={5} py="3">
      <Box safeAreaBottom>
        <P>
          PRESS predicts the probability of impaired oral intake and return to
          prestroke diet. Prediction estimates are generated for day 7 and day
          30 after stroke. Impaired oral intake is defined as FOIS ≤ 4 (i.e.
          oral diet of a single consistency or worse). The 95% confidence
          interval for the prediction estimates is given below.
        </P>
        <Heading size="md" py={2}>
          Enteral tube feeding
        </Heading>
        <P>
          Guidelines recommend enteral tube feeding if oral intake is not likely
          to recover within
          <B>7 days</B>.
        </P>
        <P>
          PEG should be preferred if swallowing disturbances are likely to
          persist for more than
          <B>4 weeks</B>.
        </P>
        <P>
          Clinicians should decide within the first 48 hours whether enteral
          tube feeding should be established.
        </P>
        <Heading size="md" py={2}>
          Reference
        </Heading>
        <P>
          Gomes F, Hookway C, Weekes CE, Royal College of Physicians
          Intercollegiate Stroke Working Party (2014): Royal College of
          Physicians Intercollegiate Stroke Working Party evidence-based
          guidelines for the nutritional support of patients who have had a
          stroke. Journal of human nutrition and dietetics : the official
          journal of the British Dietetic Association.
        </P>
        <P>
          Wirth R, Smoliner C, Jäger M, Warnecke T, Leischker AH, Dziewas R,
          DGEM Steering Committee* (2013): Guideline clinical nutrition in
          patients with stroke. Exp Transl Stroke Med 5:14.
        </P>
        <P>
          Corrigan ML, Escuro AA, Celestin J, Kirby DF (2011): Nutrition in the
          stroke patient. Nutr Clin Pract 26:242–252.
        </P>
        <P>
          Stroud M, Duncan H, Nightingale J, British Society of Gastroenterology
          (2003): Guidelines for enteral feeding in adult hospital patients.
          Gut. BMJ Group.
        </P>
      </Box>
    </ScrollView>
  </>
)

export default Info
