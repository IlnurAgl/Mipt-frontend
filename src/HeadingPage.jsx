import { Heading } from "@chakra-ui/react";

export default function HeadingPage({children}) {
  return (
    <Heading as="h1" fontSize="40px" fontWeight={"bold"} p="40px 0px 30px 0px">
      {children}
    </Heading>
  );
}