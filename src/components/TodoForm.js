import React from 'react';
import { Paper } from '@mui/material';
import { TextField } from '@mui/material';

import UseInputState from '../hooks/useInputState';

function TodoForm(props) {
const [value, handleChange, reset] = UseInputState('');
const handleSubmit = e => {
  e.preventDefault();
  props.addTodo(value);
  reset();
}

  return(
    <Paper style={{ margin: '1rem 0', padding: '0 1rem'}}>
      <form onSubmit={handleSubmit}>
        <TextField
          value={value}
          onChange={handleChange}
          margin='normal'
          label='Add New Todo'
          fullWidth
        />
      </form>
      
    </Paper>
  )
};

export default TodoForm;