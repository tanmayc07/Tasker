import { Center, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Center
      bg="#77eaff"
      borderRadius="15px"
      shadow="md"
      w="80%"
      p={4}
      my={4}
      mx="auto"
      color="white"
    >
      <Heading as="h1" fontSize={{ base: "37px", md: "48px" }} isTruncated>
        React Todo
      </Heading>
    </Center>
  );
};

export default Header;
