import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function AddNewTask() {
  return (
    <>
      <h1 style={{ margin: "5% auto" }}>Add New Task</h1>
      <TextField
        id="filled-basic"
        label="Add New Task"
        sx={{
          backgroundColor: "white",
          width: "79%",
          borderRadius: "5px",
        }}
        variant="filled"
      />
      <Button
        variant="filled"
        sx={{
          backgroundColor: "white",
          width: "19%",
          color: "black",
          margin: "0 1%",
          height: "59px",
        }}
      >
        Add Task
      </Button>
    </>
  );
}
export default AddNewTask;
