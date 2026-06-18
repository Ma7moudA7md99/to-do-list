import "./App.css";
import Container from "@mui/material/Container";
import MainList from "./Components/MainList";
import { TaskContext } from "./Contexts/TaskContexts";
import AddNewTask from "./Components/AddNewTask";
function App() {
  const tasks = [
    {
      id: 1,
      title: "Task 1",
      description: "This is the first task",
      completed: false,
    },
    {
      id: 2,
      title: "Task 2",
      description: "This is the second task",
      completed: false,
    },
    {
      id: 3,
      title: "Task 3",
      description: "This is the third task",
      completed: true,
    },
  ];
  return (
    <TaskContext.Provider value={tasks}>
      <Container sx={{ margin: "5% auto" }}>
        <MainList />
        <AddNewTask />
      </Container>
    </TaskContext.Provider>
  );
}

export default App;
