import { Icon, Box, Text, Flex, Image, Heading } from "@chakra-ui/react"
import { SlClock } from "react-icons/sl";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";


export default function FilmCard(data) {
  if (data.star) {
    var icon = <Icon color='#F9A62B' fontSize='20px'><FaStar /></Icon>
  } else {
    var icon = <Icon color='#F9A62B' fontSize='20px'><CiStar /></Icon>
  }
  if (data.type === 'Боевик') {
    var typeText = <Text bg={'#EA92631F'} borderRadius={'24px'} p='0px 12px' color='#E26C2D'>{data.type}</Text>
  } else if (data.type === 'Драма') {
    var typeText = <Text bg={'#958F8F1F'} borderRadius={'24px'} p='0px 12px' color='#958F8F'>{data.type}</Text>
  } else if (data.type === 'Триллер') {
    var typeText = <Text bg={'#49B64E1F'} borderRadius={'24px'} p='0px 12px' color='#49B64E'>{data.type}</Text>
  }
  return (
    <Box maxW="350px" borderWidth="1px" rounded="10px" minH="325px">
    <Image src={data.imageUrl} alt={data.imageAlt} rounded="8px 8px 0 0 "/>
    <Flex p='30px 40px 30px 20px' direction='column' gap='10px'>
      <Heading fontSize="24px" fontWeight="bold">{data.title}</Heading>
      <Flex justify={"space-between"} align={'center'}>
        {typeText}
        <Flex align={'center'} gap="8px"><SlClock />{data.duration} мин.</Flex>
        {icon}
      </Flex>
    </Flex>
    </Box>
  )
}
  