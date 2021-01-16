import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState({});

  const handleCreate = (value) => {
    // setTasks({
    //   ...tasks,
    //   value,
    // });
    console.log(value);
  };

  return (
    <div className="App">
      <Header />
      <Form handleCreate={handleCreate} />
      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;
