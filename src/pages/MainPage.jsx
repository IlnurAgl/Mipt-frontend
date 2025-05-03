
import HeadingPage from '../HeadingPage'
import { Flex, Box, Grid, HStack, Checkbox } from '@chakra-ui/react'
import FilmCard from '../FilmCard'
import FilterItem from '../FilterItem'
import ImageCard from '../assets/card-img.png'
import ImageCard1 from '../assets/card-img-1.png'
import ImageCard2 from '../assets/card-img-2.png'
import ImageCard3 from '../assets/card-img-3.png'
import ImageCard4 from '../assets/card-img-4.png'
import ImageCard5 from '../assets/card-img-5.png'
import ImageCard6 from '../assets/card-img-6.png'
import ImageCard7 from '../assets/card-img-7.png'
import ImageCard8 from '../assets/card-img-8.png'
import { FaCheckCircle } from "react-icons/fa";

export default function MainPage() {
  return (
    <Box>
      <Flex justify={'space-between'} align={'center'}>
      <HeadingPage>Все фильмы</HeadingPage>
      <HStack align={"center"}>
      <Checkbox.Root colorPalette={"orange"} defaultChecked>
        <Checkbox.HiddenInput />
        <Checkbox.Control rounded={"full"} borderColor={"orange"} />
        <Checkbox.Label>Боевик</Checkbox.Label>
      </Checkbox.Root>

      <Checkbox.Root colorPalette={"green"} defaultChecked>
        <Checkbox.HiddenInput />
        <Checkbox.Control rounded={"full"} borderColor={"green"} />
        <Checkbox.Label>Триллер</Checkbox.Label>
      </Checkbox.Root>

      <Checkbox.Root colorPalette={"blue"} defaultChecked>
        <Checkbox.HiddenInput />
        <Checkbox.Control rounded={"full"} borderColor={"blue"} />
        <Checkbox.Label>Комедия</Checkbox.Label>
      </Checkbox.Root>

      <Checkbox.Root colorPalette={"black"} defaultChecked>
        <Checkbox.HiddenInput />
        <Checkbox.Control rounded={"full"} borderColor={"black"} />
        <Checkbox.Label>Драма</Checkbox.Label>
      </Checkbox.Root>
      </HStack>
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
    </Box>
  );
}
