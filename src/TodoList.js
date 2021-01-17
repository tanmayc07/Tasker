import { Center, Heading, SimpleGrid } from "@chakra-ui/react";
import Todo from "./Todo";

const TodoList = ({ tasks, handleDelete }) => {
  return (
    <>
      {tasks !== undefined && tasks.length === 0 && (
        <Center>
          <Heading as="h5" fontSize={{ base: "20px", md: "25px" }}>
            No tasks currently...
          </Heading>
        </Center>
      )}
      {tasks && (
        <SimpleGrid
          spacingX="60px"
          spacingY="30px"
          w="80%"
          mx="auto"
          my={2}
          columns={{ sm: 2, md: 3 }}
        >
          {tasks.map((task) => {
            return (
              <Todo
                desc={task.value}
                key={task.id}
                task={task}
                handleDelete={handleDelete}
              />
            );
          })}
        </SimpleGrid>
      )}
    </>
  );
};

export default TodoList;
