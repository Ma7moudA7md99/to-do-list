import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import { useState, useContext } from "react";
import { TaskContext } from "../Contexts/TaskContexts";

function AddNewTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [openDialog, setOpenDialog] = useState(false); // ← controls dialog
  const { addTask } = useContext(TaskContext);

  function handleAddTask() {
    if (title.trim() === "" || description.trim() === "") {
      setOpenDialog(true); // ← show dialog instead of returning JSX
      return;
    }
    addTask(title, description);
    setTitle("");
    setDescription("");
  }

  return (
    <>
      <h1 style={{ margin: "5% auto" }}>Add New Task</h1>

      <TextField
        label="Add New Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ backgroundColor: "white", width: "80%", borderRadius: "5px" }}
        variant="filled"
        required
      />
      <Button
        variant="filled"
        sx={{
          backgroundColor: "white",
          width: "19%",
          color: "black",
          margin: "0 0 0 10px",
          height: "59px",
        }}
        onClick={handleAddTask}
      >
        Add Task
      </Button>
      <TextField
        label="Add New Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{
          backgroundColor: "white",
          width: "100%",
          borderRadius: "5px",
          margin: "10px 0",
        }}
        variant="filled"
        required
      />

      {/* Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle sx={{ color: "black" }}>Missing Fields</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill in both the task title and description before adding.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddNewTask;
