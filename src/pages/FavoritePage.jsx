import { Box } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import HeadingPage from '../HeadingPage'
import FavoriteItem from '../FavoriteItem'

export default function FavoritesPage() {
  const [favoriteFilms, setFavoriteFilms] = useState([]);

  useEffect(() => {
    const fetchFavoriteFilms = async () => {
      try {
        const favoriteIds = JSON.parse(localStorage.getItem('favorites') || '[]');
        const films = await Promise.all(
          favoriteIds.map(id =>
            fetch(`http://127.0.0.1:8000/films/${id}`)
              .then(res => res.json())
          )
        );
        setFavoriteFilms(films);
      } catch (error) {
        console.error('Error fetching favorite films:', error);
      }
    };

    fetchFavoriteFilms();
  }, []);

  const handleRemoveFavorite = (filmId) => {
    const updatedFavorites = favoriteFilms.filter(film => film.id !== filmId);
    setFavoriteFilms(updatedFavorites);
    localStorage.setItem(
      'favorites',
      JSON.stringify(updatedFavorites.map(film => film.id))
    );
  };

  return (
    <Box>
      <HeadingPage>Избранное</HeadingPage>
      {favoriteFilms.map(film => (
        <FavoriteItem
          key={film.id}
          id={film.id}
          image={film.image}
          name={film.name}
          duration={film.duration}
          onRemove={handleRemoveFavorite}
        />
      ))}
    </Box>
  );
}