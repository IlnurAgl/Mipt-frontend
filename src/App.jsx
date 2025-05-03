import NavBar from './NavBar'
import Bottom from './Bottom'
import { Center, Box } from '@chakra-ui/react'
import { Outlet } from "react-router";

function App() {
  return (
    <Center>
    <Box w="1170px">
      <NavBar />
      <Outlet />
      <Bottom />
    </Box>
    </Center>
  )
}

export default App
