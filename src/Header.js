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
      <Heading as="h1" size="4xl" isTruncated>
        React Todo
      </Heading>
    </Center>
  );
};

export default Header;
