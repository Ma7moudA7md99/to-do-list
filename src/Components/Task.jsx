import { useContext, useState } from "react";
import { TaskContext } from "../Contexts/TaskContexts";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";

function Task() {
  const { tasks, deleteTask, editTask, checkTask } = useContext(TaskContext);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  function handleOpenEdit(task) {
    setSelectedTask(task);
    setNewTitle(task.title); // pre-fill with current values
    setNewDescription(task.description);
    setOpenDialog(true);
  }

  function handleSaveEdit() {
    if (newTitle.trim() === "" || newDescription.trim() === "") return;
    editTask(selectedTask.id, newTitle, newDescription);
    setOpenDialog(false);
  }

  return (
    <>
      {tasks.map((task) => (
        <Card
          variant="outlined"
          key={task.id}
          sx={{ mb: 2 }}
          style={{ backgroundColor: task.completed ? "#d3ffd3" : "white" }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              {task.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {task.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleOpenEdit(task)}>
              Edit
            </Button>
            <Button size="small" onClick={() => deleteTask(task.id)}>
              Delete
            </Button>
            <Button size="small" onClick={() => checkTask(task.id)}>
              {task.completed ? "Mark as Incomplete" : "Mark as Complete"}
            </Button>
          </CardActions>
        </Card>
      ))}

      {/* Edit Dialog — sibling to the cards, never inside them */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle sx={{ color: "black" }}>Edit Task</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}
        >
          <TextField
            label="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            variant="outlined"
            fullWidth
            multiline
            rows={3}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSaveEdit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Task;
