import { Flex, Text }  from '@chakra-ui/react';
import MenuItem from './MenuItem';

export default function NavBar() {
    return (
      <Flex gap="28px" p="35px 50px 0px 0px">
        <MenuItem to="/">Все фильмы</MenuItem>
        <MenuItem to="/favorites">Избранное</MenuItem>
        <MenuItem to="/addFilm">Добавить фильм</MenuItem>
      </Flex>
    );
  }
  