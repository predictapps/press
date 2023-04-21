import { Text, HStack, VStack } from 'native-base'
import { AnimatedCircularProgress } from 'react-native-circular-progress'

interface GaugeProps {
  min: number
  max: number
  value: number
}

const GaugeProps: React.FC<GaugeProps> = ({ min, max, value }) => (
  <AnimatedCircularProgress
    size={150}
    width={10}
    fill={value}
    rotation={0}
    tintColor="#a3c109"
    lineCap="round"
    backgroundColor="#C7E596"
  >
    {(fill) => (
      <VStack alignItems="center">
        <HStack alignItems="baseline">
          <Text fontWeight="bold" fontSize={44}>
            {fill.toFixed()}
          </Text>
          <Text>%</Text>
        </HStack>
        <Text color="gray.600">
          {min}% - {max}%
        </Text>
      </VStack>
    )}
  </AnimatedCircularProgress>
)

export default GaugeProps
