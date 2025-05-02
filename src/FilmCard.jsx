import { Badge, Box, HStack, Icon, Image, Text } from "@chakra-ui/react"
import { HiStar } from "react-icons/hi"

export default function FilmCard(data) {
    return (
      <Box maxW="sm" borderWidth="1px">
      <Image src={data.imageUrl} alt={data.imageAlt} />

      <Box p="4" spaceY="2">
        <HStack>
          <Badge colorPalette="teal" variant="solid">
            Superhost
          </Badge>
          <HStack gap="1" fontWeight="medium">
            <Icon color="orange.400">
              <HiStar />
            </Icon>
            <Text>
              {data.rating} ({data.reviewCount})
            </Text>
          </HStack>
        </HStack>
        <Text fontWeight="medium" color="fg">
          {data.title}
        </Text>
        <HStack color="fg.muted">
          {data.formattedPrice} • {data.beds} beds
        </HStack>
      </Box>
    </Box>
  )
}
  