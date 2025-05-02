import NavBar from './NavBar'
import Bottom from './Bottom'
import HeadingPage from './HeadingPage'
import { Center, Flex, Text, Box, Grid } from '@chakra-ui/react'
import FilmCard from './FilmCard'
import FilterItem from './FilterItem'
import ImageCard from './assets/card-img.png'
import ImageCard1 from './assets/card-img-1.png'
import ImageCard2 from './assets/card-img-2.png'
import ImageCard3 from './assets/card-img-3.png'
import ImageCard4 from './assets/card-img-4.png'
import ImageCard5 from './assets/card-img-5.png'
import ImageCard6 from './assets/card-img-6.png'
import ImageCard7 from './assets/card-img-7.png'
import ImageCard8 from './assets/card-img-8.png'
import { FaCheckCircle } from "react-icons/fa";

function App() {
  return (
    <Center>
    <Box w="1170px">
      <NavBar />
      <Flex justify={'space-between'} align={'center'}>
        <HeadingPage>Все фильмы</HeadingPage>
        <Flex>
          <FilterItem><Flex align={'center'} gap="8px"><FaCheckCircle color='#EA580B'/>Боевик</Flex></FilterItem>
          <FilterItem><Flex align={'center'} gap="8px"><FaCheckCircle color='#17A34A'/>Триллер</Flex></FilterItem>
          <FilterItem><Flex align={'center'} gap="8px"><FaCheckCircle color='#2463EB'/>Комедия</Flex></FilterItem>
          <FilterItem><Flex align={'center'} gap="8px"><FaCheckCircle color='#18181B'/>Драма</Flex></FilterItem>
        </Flex>
      </Flex>
      <Grid templateColumns={"repeat(3, 1fr)"} gap="{60px 50px}" padding={"25px 0px 140px 0px"}>
        <FilmCard imageAlt="test" imageUrl={ImageCard} title="Матрица" type="Боевик" duration="136" star={true}/>
        <FilmCard imageAlt="test" imageUrl={ImageCard1} title="Безумный макс" type="Боевик" duration="88"/>
        <FilmCard imageAlt="test" imageUrl={ImageCard2} title="Джентельмены" type="Драма" duration="113"/>
        <FilmCard imageAlt="test" imageUrl={ImageCard3} title="Отступники" type="Триллер" duration="151"/>
        <FilmCard imageAlt="test" imageUrl={ImageCard4} title="Гладиатор" type="Боевик" duration="155"/>
        <FilmCard imageAlt="test" imageUrl={ImageCard5} title="Однажды в Голливиде" type="Драма" duration="161" star={true}/>
        <FilmCard imageAlt="test" imageUrl={ImageCard6} title="Предложение" type="Комедия" duration="108"/>
        <FilmCard imageAlt="test" imageUrl={ImageCard7} title="Малышка на миллион" type="Драма" duration="132" star={true}/>
        <FilmCard imageAlt="test" imageUrl={ImageCard8} title="Ларри Краун" type="Комедия" duration="98"/>
      </Grid>
      <Bottom />
    </Box>
    </Center>
  )
}

export default App
