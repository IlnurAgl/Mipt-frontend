import NavBar from './NavBar'
import Bottom from './Bottom'
import HeadingPage from './HeadingPage'
import { Center, Flex, Text, Box, Grid } from '@chakra-ui/react'
import FilmCard from './FilmCard'
import FilterItem from './FilterItem'

function App() {
  return (
    <Center>
    <Box w="1170px">
      <NavBar />
      <Flex justify={'space-between'} align={'center'}>
        <HeadingPage>Все фильмы</HeadingPage>
        <Flex >
          <FilterItem>Боевик</FilterItem>
          <FilterItem>Триллер</FilterItem>
          <FilterItem>Комедия</FilterItem>
          <FilterItem>Драма</FilterItem>
        </Flex>
      </Flex>
      <Grid templateColumns={"repeat(3, 1fr)"} gap="20px" padding={"20px 0px"}>
        <FilmCard imageAlt="test" rating="1" imageUrl="https://www.fxmag.ru/users/scr/eRsLQaeRsdFX/h6tShKa2.png"  title="test" description="test" beds="1" price="100" reviewCount="100" />
        <FilmCard imageAlt="test" rating="1" imageUrl="https://www.fxmag.ru/users/scr/eRsLQaeRsdFX/h6tShKa2.png"  title="test" description="test" beds="1" price="100" reviewCount="100" />
        <FilmCard imageAlt="test" rating="1" imageUrl="https://www.fxmag.ru/users/scr/eRsLQaeRsdFX/h6tShKa2.png"  title="test" description="test" beds="1" price="100" reviewCount="100" />
        <FilmCard imageAlt="test" rating="1" imageUrl="https://www.fxmag.ru/users/scr/eRsLQaeRsdFX/h6tShKa2.png"  title="test" description="test" beds="1" price="100" reviewCount="100" />
        <FilmCard imageAlt="test" rating="1" imageUrl="https://www.fxmag.ru/users/scr/eRsLQaeRsdFX/h6tShKa2.png"  title="test" description="test" beds="1" price="100" reviewCount="100" />
        <FilmCard imageAlt="test" rating="1" imageUrl="https://www.fxmag.ru/users/scr/eRsLQaeRsdFX/h6tShKa2.png"  title="test" description="test" beds="1" price="100" reviewCount="100" />
        <FilmCard imageAlt="test" rating="1" imageUrl="https://www.fxmag.ru/users/scr/eRsLQaeRsdFX/h6tShKa2.png"  title="test" description="test" beds="1" price="100" reviewCount="100" />
      </Grid>
      <Bottom />
    </Box>
    </Center>
  )
}

export default App
