import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { v1 as v1id } from "uuid";
// import Footer from "./Footer";
import { Box, useToast } from "@chakra-ui/react";

function App() {
  const [tasks, setTasks] = useState([]);
  const toast = useToast();

  const handleCreate = (value) => {
    if (value !== "") {
      setTasks([...tasks, { id: v1id(), value }]);
      toast({
        position: "bottom-left",
        title: "Success",
        description: "Task Created!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        position: "bottom",
        title: "Something's Wrong",
        description: "Please enter some value!",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
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
    if (tasks.length !== 0) {
      setTasks([]);
      toast({
        position: "bottom-left",
        title: "Success",
        description: "Tasks Deleted!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        position: "bottom",
        title: "Something's Wrong",
        description: "There are no tasks to delete!",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
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
