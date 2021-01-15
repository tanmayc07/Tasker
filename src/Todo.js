import { Text, IconButton, Flex, Spacer } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const Todo = ({ desc }) => {
  return (
    <Flex p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
      <Text fontSize={{ sm: "12px", md: "20px" }}>{desc}</Text>
      <Spacer />
      <IconButton aria-label="Delete Todo" icon={<DeleteIcon />} />
    </Flex>
  );
};

export default Todo;
