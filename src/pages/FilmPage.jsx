import { Flex, Image, Box, Heading, Icon, Button, Text } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { SlClock } from "react-icons/sl";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";


export default function FilmPage() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams()
  
  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/films/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch film data');
        }
        const data = await response.json();
        setFilm(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(id));
    fetchFilm();
  }, [id]);

  const navigate = useNavigate();

  const handleDeleteClick = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/films/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete film');
      }

      console.log('Фильм успешно удален');
      navigate('/');
    } catch (err) {
      console.error('Ошибка при удалении:', err.message);
    }
  };

  const handleFavoriteClick = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const newFavorites = isFavorite
      ? favorites.filter(id => id !== id)
      : [...favorites, id];
    
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };
  const icon = isFavorite
    ? <Icon color='#F9A62B' size='2xl'><FaStar /></Icon>
    : <Icon color='#F9A62B' size='2xl'><CiStar /></Icon>;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!film) return <div>No film data</div>;

  const data_type = film.film_type || 'Боевик';
  let typeText;
  if (data_type === 'боевик') {
    typeText = <Text bg={'#EA92631F'} borderRadius={'24px'} p='0px 12px' color='#E26C2D'>{data_type}</Text>
  } else if (data_type === 'драма') {
    typeText = <Text bg={'#958F8F1F'} borderRadius={'24px'} p='0px 12px' color='#958F8F'>{data_type}</Text>
  } else if (data_type === 'триллер') {
    typeText = <Text bg={'#49B64E1F'} borderRadius={'24px'} p='0px 12px' color='#49B64E'>{data_type}</Text>
  } else {
    typeText = <Text bg={'#8775D21F'} borderRadius={'24px'} p='0px 12px' color='#8775D2'>{data_type}</Text>
  }

  return (
    <Flex p="70px 0px 0px 0px" gap="50px">
      <Image rounded={"16px"} w="480px" h="480px" src={`${film.image}`}/>
      <Flex w="100%" direction={"column"} gap="10px">
        <Flex justify={"space-between"}>
          <Heading fontSize="40px">{film.name}</Heading>
          <Button bg="#FFFFFF" onClick={handleFavoriteClick}>{icon}</Button>
        </Flex>
        <Flex gap="30px">
          {typeText}
          <Flex align={'center'} gap="8px"><SlClock />{film.duration} мин.</Flex>
        </Flex>
        <Text>{film.description}</Text>
        <Flex p="30px 0px 0px 0px" gap="20px" justify={"flex-end"}>
          <Button borderColor={"#DEE2F2"} rounded={"6px"} bg="#FFFFFF" _hover={{bg: "#F0F3FF"}} h="30px" onClick={() => navigate(`/edit/${id}`)}><Text color="#4A61DD">Редактировать</Text></Button>
          <Button borderColor={"#DEE2F2"} rounded={"6px"} bg="#FFFFFF" _hover={{bg: "#F0F3FF"}} h="30px" onClick={handleDeleteClick}><Text color="#4A61DD">Удалить</Text></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}