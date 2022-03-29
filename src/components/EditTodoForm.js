import React from "react";
import {
  Paper,
  TextField,
} from '@mui/material';

import UseInputState from "../hooks/useInputState";

function EditTodoForm(props){
  const [value, handleChange, reset] = UseInputState(props.task);
  const handleSubmit = e => {
    e.preventDefault();
    props.editTodo(props.id, value);
    reset();
    props.toggleEditForm();
  }
  return(
    <form onSubmit={handleSubmit}>
      <TextField
        value={value}
        onChange={handleChange}
        margin='normal'
        fullWidth
      />
    </form>
  );
};

export default EditTodoForm;