import { VStack, HStack } from "@chakra-ui/react";
import Todo from "./Todo";

const TodoList = () => {
  return (
    <>
      <VStack spacing={4} w="80%" mx="auto" align="stretch">
        <HStack spacing={8}>
          <Todo desc="Bring Tuna" />
          <Todo desc="You deserve good things. With a whooping 10-15% " />
          <Todo desc="You deserve good things. With a whooping " />
          <Todo desc="Bring Sandwich from Hiranandani" />
        </HStack>
      </VStack>
    </>
  );
};

export default TodoList;
