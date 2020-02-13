import React from 'react';
import styles from './TodoList.module.css';

import ToDoItem from '../TodoItem/TodoItem';

const ToDoList = ({ tasks, deleteTask, completeTask }) => {
   return <ul className={styles.todoList}>
       { tasks.map(({id, text, isCompleted})=>(
           <ToDoItem deleteTask={deleteTask} completeTask={completeTask} id={id} key={id + text} text={text} isCompleted={isCompleted} />
       ))}
   </ul>
};

export default ToDoList;