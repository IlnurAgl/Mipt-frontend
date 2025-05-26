import { Box, Image, Flex, Text, Button } from "@chakra-ui/react";
import { SlClock } from "react-icons/sl";

export default function FavoriteItem({ id, image, name, duration, onRemove }) {
  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <Box width="597px" p="15px" borderBottom="1px solid #EEEEEE">
      <Flex gap="25px" justify="space-between" alignItems="center">
        <Image boxSize="91px" borderRadius="full" src={image} alt="Избранное" />
        <Flex maxH="70%" marginEnd="auto" justify="space-between" direction="column">
          <Text fontSize="24px">{name}</Text>
          <Flex align={'center'} gap="8px"><SlClock /><Text fontSize="16px">{duration} мин.</Text></Flex>
        </Flex>
        <Button bg="#FFFFFF" color="#000000" onClick={handleRemove}>Удалить</Button>
      </Flex>
    </Box>
  );
}