import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(null);

  const handleCreate = (value) => {
    if (tasks === null) {
      setTasks([value]);
    } else {
      setTasks([...tasks, value]);
    }
  };

  console.log(tasks);

  return (
    <div className="App">
      <Header />
      <Form handleCreate={handleCreate} />
      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;
