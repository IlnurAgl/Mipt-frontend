import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Button, Field, Fieldset, Input, Box, Center,
  Grid, GridItem, Textarea, FileUpload, Flex, Text, HStack, Checkbox } from "@chakra-ui/react"
import HeadingPage from '../HeadingPage'
import { HiUpload } from "react-icons/hi"

export default function EditFilmPage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [formData, setFormData] = useState({
    name: '',
    film_type: '',
    duration: '',
    description: '',
    image: null
  })

  useEffect(() => {
    const fetchFilmData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/films/${id}`)
        setFormData(response.data)
      } catch (error) {
        console.error('Ошибка при загрузке данных фильма:', error)
      }
    }
    fetchFilmData()
  }, [id])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleImageChange = async (files) => {
    if (files.length > 0) {
      const file = files[0]
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put(`http://127.0.0.1:8000/films/${id}`, formData)
      console.log('Фильм успешно обновлен', response.data)
      navigate(`/film/${id}`)
    } catch (error) {
      console.error('Ошибка при обновлении фильма:', error.response?.data || error.message)
    }
  }

  return (
    <Box p="0 0 100px 0">
      <HeadingPage>Редактировать фильм</HeadingPage>
      <Center>
        <Box w="770px" border={"1px solid #EEEEEE"} p={"50px"} borderRadius={"16px"}>
          <Fieldset.Root as="form" onSubmit={handleSubmit}>
            <Fieldset.Content>
              <Grid templateColumns="repeat(2, 1fr)" gap="20px">

                <GridItem>
                  <Field.Root>
                  <Field.Label fontSize="16px" font="Inter">Название фильма</Field.Label>
                  </Field.Root>
                </GridItem>
                <GridItem>
                  <Input name="name" value={formData.name} onChange={handleInputChange} />
                </GridItem>
  
                <GridItem>
                  <Field.Root>
                  <Field.Label>Жанр</Field.Label>
                  </Field.Root>
                </GridItem>
                <GridItem>
                  <HStack>
                  <Checkbox.Root colorPalette={"orange"} name="film_type" value="боевик"
                    checked={formData.film_type === 'боевик'}
                    onChange={(e) => setFormData(prev => ({ ...prev, film_type: e.target.checked ? 'боевик' : '' }))}>
                    <Checkbox.HiddenInput />
                    <Checkbox.Control rounded={"full"} borderColor={"orange"} />
                    <Checkbox.Label>Боевик</Checkbox.Label>
                  </Checkbox.Root>

                  <Checkbox.Root colorPalette={"green"} name="film_type" value="триллер"
                    checked={formData.film_type === 'триллер'}
                    onChange={(e) => setFormData(prev => ({ ...prev, film_type: e.target.checked ? 'триллер' : prev.film_type === 'триллер' ? '' : prev.film_type }))}>
                    <Checkbox.HiddenInput />
                    <Checkbox.Control rounded={"full"} borderColor={"green"} />
                    <Checkbox.Label>Триллер</Checkbox.Label>
                  </Checkbox.Root>

                  <Checkbox.Root colorPalette={"blue"} name="film_type" value="комедия"
                    checked={formData.film_type === 'комедия'}
                    onChange={(e) => setFormData(prev => ({ ...prev, film_type: e.target.checked ? 'комедия' : prev.film_type === 'комедия' ? '' : prev.film_type }))}>
                    <Checkbox.HiddenInput />
                    <Checkbox.Control rounded={"full"} borderColor={"blue"} />
                    <Checkbox.Label>Комедия</Checkbox.Label>
                  </Checkbox.Root>

                  <Checkbox.Root colorPalette={"black"} name="film_type" value="драма"
                    checked={formData.film_type === 'драма'}
                    onChange={(e) => setFormData(prev => ({ ...prev, film_type: e.target.checked ? 'драма' : prev.film_type === 'драма' ? '' : prev.film_type }))}>
                    <Checkbox.HiddenInput />
                    <Checkbox.Control rounded={"full"} borderColor={"black"} />
                    <Checkbox.Label>Драма</Checkbox.Label>
                  </Checkbox.Root>
                  </HStack>
                </GridItem>

                <GridItem>
                  <Field.Root>
                  <Field.Label>Длительность</Field.Label>
                  </Field.Root>
                </GridItem>
                <GridItem>
                  <Flex gap="10px" align={"center"}>
                    <Input w="84px" name="duration" value={formData.duration} onChange={handleInputChange} />
                    <Text>мин.</Text>
                  </Flex>
                </GridItem>

                <GridItem>
                  <Field.Root>
                  <Field.Label>Описание</Field.Label>
                  </Field.Root>
                </GridItem>
                <GridItem>
                  <Textarea name="description" value={formData.description} onChange={handleInputChange} variant="outline" h="184px" />
                </GridItem>

                <GridItem>
                  <Field.Root>
                  <Field.Label>Загрузить фото</Field.Label>
                  </Field.Root>
                </GridItem>
                <GridItem inline="true">
                <FileUpload.Root accept={["image/png"]} onChange={(e) => handleImageChange(e.target.files)}>
                  <FileUpload.HiddenInput />
                  <Flex gap="30px" align={"center"}>
                  <FileUpload.Trigger asChild>
                    <Button variant="outline">
                      <HiUpload /> Выбрать файл
                    </Button>
                  </FileUpload.Trigger>
                  <FileUpload.List />
                  </Flex>
                </FileUpload.Root>
                </GridItem>
    
              </Grid>
            </Fieldset.Content>
            <Center p="20px 0 0 0">
            <Button type="submit" alignSelf="flex-start" bg="#4A61DDB2" onClick={handleSubmit}>Сохранить изменения</Button>
            </Center>
            </Fieldset.Root>
        </Box>
      </Center>
    </Box>
  )
}