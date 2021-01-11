import { VStack, HStack } from "@chakra-ui/react";
import Todo from "./Todo";

const TodoList = () => {
  return (
    <>
      <VStack spacing={4} w="80%" mx="auto" align="stretch">
        <HStack spacing={8}>
          <Todo
            title="Plan Money"
            desc="The future can be even brighter but a goal without a plan is just a wish"
          />
          <Todo
            title="Save Money"
            desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings."
          />
          <Todo
            title="Save Money"
            desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings."
          />
        </HStack>
      </VStack>
    </>
  );
};

export default TodoList;
