import React, { useEffect } from 'react';
import { Typography, Paper, AppBar, Toolbar, Grid} from '@mui/material';

import UseTodoState from '../hooks/useTodoState';
import TodoList from './TodoList';
import TodoForm from './TodoForm';


function TodoApp(){
  const initialTodos = [{id:"1", task:"Input Todos", completed: false}];
  const {todos, addTodo, removeTodo, toggleTodo, editTodo} = UseTodoState(initialTodos);
  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return(
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa'
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{ height: '64px' }}>
        <Toolbar>
          <Typography color='inherit'>TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent='center' style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo}/>
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
      
    </Paper>
  );
};

export default TodoApp;


//TodoApp will manage state for entire application
//  TodoForm
//  TodoList
//    TodoItem (id, task, compeleted[true/false])