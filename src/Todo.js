import { Text, IconButton, Flex, Spacer } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const Todo = ({ desc, task, handleDelete }) => {
  return (
    <Flex p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
      <Text fontSize={{ sm: "12px", md: "20px" }}>{desc}</Text>
      <Spacer />
      <IconButton
        aria-label="Delete Todo"
        icon={<DeleteIcon />}
        onClick={() => handleDelete(task.id)}
      />
    </Flex>
  );
};

export default Todo;
