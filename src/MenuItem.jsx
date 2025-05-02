import { Box, Link } from "@chakra-ui/react";

export default function MenuItem({children}) {
  return (
    <Box>
      <Link fontsize="16px" fontWeight="medium" textDecoration="none">
        {children}
      </Link>
    </Box>
  )
} 