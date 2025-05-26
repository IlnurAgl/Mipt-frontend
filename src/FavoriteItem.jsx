import { Box, Image, Flex, Text, Button, Link } from "@chakra-ui/react";
import { SlClock } from "react-icons/sl";

export default function FavoriteItem({ id, image, name, duration, onRemove }) {
  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <Box width="597px" p="15px" borderBottom="1px solid #EEEEEE">
      <Flex gap="25px" justify="space-between" alignItems="center">
        <Image boxSize="91px" borderRadius="full" src={image} alt="Избранное" />
        <Flex marginEnd="auto" justify="space-between" direction="column" gap="20px">
          <Link href={`/film/${id}`} fontSize="18px">{name}</Link>
          <Flex align={'center'} gap="8px"><SlClock /><Text fontSize="16px">{duration} мин.</Text></Flex>
        </Flex>
        <Button
          bg="#FFFFFF"
          color="#858383"
          onClick={handleRemove}
          _hover={{
            color: "#000000",
            transform: "scale(1.05)"
          }}
          transition="all 0.2s"
        >
          Удалить
        </Button>
      </Flex>
    </Box>
  );
}