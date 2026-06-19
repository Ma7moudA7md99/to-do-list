import "./App.css";
import Container from "@mui/material/Container";
import MainList from "./Components/MainList";
import { TaskProvider } from "./Contexts/TaskProvider";
import AddNewTask from "./Components/AddNewTask";
function App() {
  return (
    <TaskProvider>
      <Container sx={{ margin: "5% auto" }}>
        <MainList />
        <AddNewTask />
      </Container>
    </TaskProvider>
  );
}

export default App;
