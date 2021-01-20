import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";
import { useState } from "react";
import { v1 as v1id } from "uuid";
// import Footer from "./Footer";
import { Box, useToast } from "@chakra-ui/react";

function App() {
  const [tasks, setTasks] = useState([]);
  const toast = useToast();

  const handleCreate = (value) => {
    setTasks([...tasks, { id: v1id(), value }]);
    toast({
      position: "bottom-left",
      title: "Success",
      description: "Task Created!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const handleDelete = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
    toast({
      position: "bottom-left",
      title: "Success",
      description: "Task Deleted!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const handleDeleteAll = () => {
    setTasks([]);
    toast({
      position: "bottom-left",
      title: "Success",
      description: "Tasks Deleted!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Box h="100%" className="App">
      <Header />
      <Form handleCreate={handleCreate} handleDeleteAll={handleDeleteAll} />
      <TodoList tasks={tasks} handleDelete={handleDelete} />
      {/* <Footer /> */}
    </Box>
  );
}

export default App;
