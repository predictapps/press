import React from 'react'
import {
  Image,
  Heading,
  HStack,
  Icon,
  IconButton,
  ScrollView,
  View,
} from 'native-base'

import { RootStackScreenProps } from '../navigation/types'
import P from '../components/P'
import B from '../components/P'

const P2 = ({ navigation }: RootStackScreenProps<'P1'>) => (
  <>
    <HStack bg="primary.500" safeAreaTop pr="50px" alignItems="center">
      <IconButton
        icon={<Icon name="arrow-left" color="white" size="xl" />}
        onPress={() => navigation.navigate('Calculate')}
      />
      <Heading flex={1} textAlign="center" color="white">
        Stroke severity
      </Heading>
    </HStack>
    <ScrollView>
      <View px={5} py="3">
        <P>
          Stroke severity is measured with the <B>NIH Stroke Scale (NIHSS)</B>{' '}
          at admission.
        </P>
      </View>
      <Image
        source={require('../assets/images/nih_stroke_scale.jpg')}
        resizeMode="contain"
        alt="NIH Stroke Scale"
        style={{
          width: '100%',
          height: undefined,
          aspectRatio: 604 / 794,
        }}
      />
    </ScrollView>
  </>
)

export default P2
