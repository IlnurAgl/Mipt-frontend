import { Flex, Text }  from '@chakra-ui/react';
import MenuItem from './MenuItem';

export default function NavBar() {
    return (
      <Flex gap="15px" p="10px 10px 10px 0px">
        <MenuItem>Все фильмы</MenuItem>
        <MenuItem>Избранное</MenuItem>
        <MenuItem>Добавить фильм</MenuItem>
      </Flex>
    );
  }
  