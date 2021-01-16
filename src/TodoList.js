import { SimpleGrid } from "@chakra-ui/react";
import Todo from "./Todo";

const TodoList = ({ tasks }) => {
  return (
    <>
      <SimpleGrid
        spacingX="60px"
        spacingY="30px"
        w="80%"
        mx="auto"
        my={2}
        columns={{ sm: 2, md: 3 }}
      >
        <Todo desc="Bring Tuna" />
        <Todo desc="You deserve good things. With a whooping 10-15% " />
        <Todo desc="You deserve good things. With a whooping With a whoopingWith a whoopingWith a whoopingWith a whooping" />
        <Todo desc="Bring Sandwich from Hiranandani" />
      </SimpleGrid>
    </>
  );
};

export default TodoList;
