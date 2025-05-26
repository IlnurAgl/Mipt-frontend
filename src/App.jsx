import NavBar from './NavBar'
import Bottom from './Bottom'
import { Center, Box } from '@chakra-ui/react'
import { Outlet } from "react-router";

function App() {
  return (
    <Center w="100%">
      <Box w="100%">
        <Center>
          <Box w="1170px">
            <NavBar />
            <Outlet />
          </Box>
        </Center>
        <Bottom />
      </Box>
    </Center>
  )
}

export default App
