import { useState, useEffect } from "react";
import { Icon, Box, Text, Flex, Image, Link, Button } from "@chakra-ui/react"
import { SlClock } from "react-icons/sl";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

export default function FilmCard(data) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(data.id));
  }, [data.id]);

  const handleFavoriteClick = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const newFavorites = isFavorite
      ? favorites.filter(id => id !== data.id)
      : [...favorites, data.id];
    
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  const icon = isFavorite
    ? <Icon color='#F9A62B' size='lg'><FaStar /></Icon>
    : <Icon color='#F9A62B' size='lg'><CiStar /></Icon>;
  if (data.type === 'Боевик') {
    var typeText = <Text bg={'#EA92631F'} borderRadius={'24px'} p='0px 12px' color='#E26C2D'>{data.type}</Text>
  } else if (data.type === 'Драма') {
    var typeText = <Text bg={'#958F8F1F'} borderRadius={'24px'} p='0px 12px' color='#958F8F'>{data.type}</Text>
  } else if (data.type === 'Триллер') {
    var typeText = <Text bg={'#49B64E1F'} borderRadius={'24px'} p='0px 12px' color='#49B64E'>{data.type}</Text>
  } else {
    var typeText = <Text bg={'#8775D21F'} borderRadius={'24px'} p='0px 12px' color='#8775D2'>{data.type}</Text>
  }
  return (
    <Box maxW="350px" borderWidth="1px" rounded="10px" minH="325px">
    <Image src={data.imageUrl} alt={data.imageAlt} rounded="8px 8px 0 0 "/>
    <Flex p='30px 40px 30px 20px' direction='column' gap='10px'>
      <Link href={`/film/${data.id}`} fontSize="24px" fontWeight="bold">{data.name}</Link>
      <Flex justify={"space-between"} align={'center'}>
        {typeText}
        <Flex align={'center'} gap="8px"><SlClock />{data.duration} мин.</Flex>
        <Button bg="#FFFFFF" onClick={handleFavoriteClick}>{icon}</Button>
      </Flex>
    </Flex>
    </Box>
  )
}
  