import { Box, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom"; 

export default function MenuItem(props) {
  return (
    <Box>
      <Link fontSize="16px" fontWeight="medium" textDecoration="none" color="gray.700" focusRing={"none"} _hover={{ textDecoration: "underline" }} to={props.to} as={(props) => (
        <NavLink {...props} style={({ isActive }) => {return { color: isActive ? "#4A61DD" : "black" };}}/>)}>
        {props.children}
      </Link>
    </Box>
  )
} 