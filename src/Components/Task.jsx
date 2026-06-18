import { useContext } from "react";
import { TaskContext } from "../Contexts/TaskContexts";
// * IMPORT MUI COMPONENTS
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Task() {
  const tasks = useContext(TaskContext);
  console.log(tasks);
  return (
    <>
      {tasks.map((task) => (
        <Card variant="outlined" key={task.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {task.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {task.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Edit</Button>
            <Button size="small">Delete</Button>
            <Button size="small">
              {task.completed ? "Mark as Incomplete" : "Mark as Complete"}
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}

export default Task;
