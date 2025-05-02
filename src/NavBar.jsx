import { Flex, Text }  from '@chakra-ui/react';
import MenuItem from './MenuItem';

export default function NavBar() {
    return (
      <Flex gap="28px" p="35px 50px 0px 0px">
        <MenuItem>Все фильмы</MenuItem>
        <MenuItem>Избранное</MenuItem>
        <MenuItem>Добавить фильм</MenuItem>
      </Flex>
    );
  }
  