import React from 'react'
import { Heading, HStack, VStack, Text, IconButton, Icon } from 'native-base'

interface LabelProps {
  letter?: string
  title: string
  subTitle?: string
  onPress: () => void
}

const Label = ({ letter, title, subTitle = '', onPress }: LabelProps) => (
  <HStack py="2">
    <VStack flex={1}>
      <Heading size="md" fontWeight={300}>
        {letter && <Text fontWeight="600">{letter}</Text>}
        {title}
      </Heading>
      <Text color="gray.500">{subTitle}</Text>
    </VStack>
    <IconButton icon={<Icon name="information" />} onPress={onPress} />
  </HStack>
)

export default Label
