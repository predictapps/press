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

import P from '../components/P'

import { RootStackScreenProps } from '../navigation/types'
import B from '../components/B'

const P3 = ({ navigation }: RootStackScreenProps<'P1'>) => (
  <>
    <HStack bg="primary.500" safeAreaTop pr="50px" alignItems="center">
      <IconButton
        icon={<Icon name="arrow-left" color="white" size="xl" />}
        onPress={() => navigation.navigate('Calculate')}
      />
      <Heading flex={1} textAlign="center" color="white">
        Stroke location
      </Heading>
    </HStack>
    <ScrollView>
      <View px={5} py="3">
        <P>
          It is evaluated, whether stroke affected the <B>frontal operculum</B>
          (regardless of laterality). The best available brain scan should be
          used (MRI typically preferred to CT).
        </P>
        <P>
          <B>Figure:</B> Location of the frontal operculum on axial, coronal and
          sagittal slices.
        </P>
      </View>
      <Image
        source={require('../assets/images/p3.png')}
        resizeMode="contain"
        alt="NIH Stroke Scale"
        style={{
          width: '100%',
          height: undefined,
          aspectRatio: 2164 / 880,
        }}
      />
    </ScrollView>
  </>
)

export default P3
