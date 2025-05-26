import { Box, Center, Flex, Text }  from '@chakra-ui/react';

export default function Bottom() {
  return (
    <Box w={"100%"} bg="#000000" h="91px" alignContent={'center'} position={'absolute'} bottom='0'>  
      <Center>
        <Box w={"1170px"}>
          <Text color='#FFFFFF' fontSize='16px' font='Inter' p='0px 0px 0px 0px'>Фильмограф</Text>
        </Box>
      </Center>
    </Box>
    );
  }
  