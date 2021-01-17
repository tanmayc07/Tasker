import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";
import { useState } from "react";
import { v1 as v1id } from "uuid";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleCreate = (value) => {
    setTasks([...tasks, { id: v1id(), value }]);
  };

  const handleDelete = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <Form handleCreate={handleCreate} />
      <TodoList tasks={tasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
