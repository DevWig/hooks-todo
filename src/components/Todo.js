import React from 'react';
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction
} from '@mui/material';
import { Delete, Edit, Save } from '@mui/icons-material';

import UseToggleState from '../hooks/useToggleState';
import EditTodoForm from './EditTodoForm';



function Todo(props) {
  const [isEditing, toggle] = UseToggleState();
  return(
    <ListItem>
      {isEditing ? (
      <>
        <EditTodoForm
          task={props.task}
          editTodo={props.editTodo}
          id={props.id}
          toggleEditForm={toggle}
        />
      </>
      ) : (
      <>
        <Checkbox
          tabIndex={-1}
          checked={props.completed}
          onClick={() => props.toggleTodo(props.id)}
        />
        <ListItemText style={{ textDecoration: props.completed ? "line-through" : "none" }}>
          {props.task}
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton onClick={() => props.removeTodo(props.id)} aria-label="Delete">
            <Delete />
          </IconButton>
          <IconButton onClick={toggle} aria-label="Edit">
            <Edit />
          </IconButton>
        </ListItemSecondaryAction>
      </>
      )}
    </ListItem>
  )
};

export default Todo;