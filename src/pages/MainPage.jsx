
import { useState, useEffect } from 'react';
import axios from 'axios';
import HeadingPage from '../HeadingPage'
import { Flex, Box, Grid, HStack, Checkbox, Spinner } from '@chakra-ui/react'
import FilmCard from '../FilmCard'
import FilterItem from '../FilterItem'
import { FaCheckCircle } from "react-icons/fa";

export default function MainPage() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTypes, setSelectedTypes] = useState(['Боевик', 'Триллер', 'Комедия', 'Драма']);

  const handleTypeChange = (type, isChecked) => {
    setSelectedTypes(prev =>
      isChecked
        ? [...prev, type]
        : prev.filter(t => t !== type)
    );
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/films');
        setFilms(response.data.map(film => ({
          ...film,
          type: capitalizeFirstLetter(film.film_type)
        })));
      } catch (error) {
        console.error('Error fetching films:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, []);

  return (
    <Box>
      <Flex justify={'space-between'} align={'center'}>
      <HeadingPage>Все фильмы</HeadingPage>
      <HStack align={"center"}>
      <Checkbox.Root
        colorPalette={"orange"}
        defaultChecked
        onChange={(e) => handleTypeChange('Боевик', e.target.checked)}
      >
        <Checkbox.HiddenInput />
        <Checkbox.Control rounded={"full"} borderColor={"orange"} />
        <Checkbox.Label>Боевик</Checkbox.Label>
      </Checkbox.Root>

      <Checkbox.Root
        colorPalette={"green"}
        defaultChecked
        onChange={(e) => handleTypeChange('Триллер', e.target.checked)}
      >
        <Checkbox.HiddenInput />
        <Checkbox.Control rounded={"full"} borderColor={"green"} />
        <Checkbox.Label>Триллер</Checkbox.Label>
      </Checkbox.Root>

      <Checkbox.Root
        colorPalette={"blue"}
        defaultChecked
        onChange={(e) => handleTypeChange('Комедия', e.target.checked)}
      >
        <Checkbox.HiddenInput />
        <Checkbox.Control rounded={"full"} borderColor={"blue"} />
        <Checkbox.Label>Комедия</Checkbox.Label>
      </Checkbox.Root>

      <Checkbox.Root
        colorPalette={"black"}
        defaultChecked
        onChange={(e) => handleTypeChange('Драма', e.target.checked)}
      >
        <Checkbox.HiddenInput />
        <Checkbox.Control rounded={"full"} borderColor={"black"} />
        <Checkbox.Label>Драма</Checkbox.Label>
      </Checkbox.Root>
      </HStack>
      </Flex>
  
      {loading ? (
        <Flex justify="center" align="center" height="300px">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <Grid templateColumns={"repeat(3, 1fr)"} gap="{60px 50px}" padding={"25px 0px 140px 0px"}>
          {films
            .filter(film =>
              selectedTypes.length === 0 ||
              selectedTypes.includes(film.type)
            )
            .map((film, index) => (
            <FilmCard
              key={index}
              id={film.id}
              imageAlt={film.name}
              imageUrl={film.image}
              name={film.name}
              type={film.type}
              duration={film.duration}
              star={film.star}
            />
          ))}
        </Grid>
      )}
    </Box>
  );
}
