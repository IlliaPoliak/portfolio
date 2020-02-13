import React, { Component } from 'react';

import ToDoInput from './TodoInput/TodoInput';
import ToDoList from './TodoList/TodoList';
import Footer from './TodoFooter/TodoFooter.jsx';
import Header from './TodoHeader/TodoHeader.jsx';

import { connect } from 'react-redux';
import { addTask, deleteTask, completeTask, deleteCompleted, checkAllTasks, uncheckAllTasks } from './../../store/reducers/tasks';
import { changeFilter } from './../../store/reducers/filters';

import styles from './Todo.module.css';

class ToDo extends Component {
    state = {
        taskText: ''
    }

    handleInputChange = ({ target: { value } }) => {
        this.setState({
            taskText: value
        })
    }

    addTask = ({ key }) => {
        const { taskText } = this.state;

        if (taskText.length >= 1 && key === 'Enter') {
            const { addTask } = this.props;

            addTask((new Date()).getTime(), taskText, false);

            this.setState({
                taskText: '',
            })
        }
    }

    filterTasks = (tasks, activeFilter) => {
        switch (activeFilter) {
            case 'active': return tasks.filter((task) => !task.isCompleted)
            case 'completed': return tasks.filter((task) => task.isCompleted)

            default: return tasks;
        }
    }

    getCompletedTasksCounter = tasks => tasks.filter(task => task.isCompleted).length;

    render() {
        const { taskText } = this.state;
        const { tasks, deleteTask, completeTask, changeFilter, filter, deleteCompleted, checkAllTasks, uncheckAllTasks } = this.props;
        const filteredTasks = this.filterTasks(tasks, filter);
        const taskCounter = this.getCompletedTasksCounter(tasks);

        return <>
            <h2 className={styles.title}>ToDo</h2>
            <div className={styles.todoWrapper}>
                <ToDoInput onKeyPress={this.addTask} onChange={this.handleInputChange} value={taskText} />
                <Header amount={taskCounter} all_tasks={tasks.length} deleteCompleted={deleteCompleted} checkAllTasks={checkAllTasks} uncheckAllTasks={uncheckAllTasks} />
                <ToDoList tasks={filteredTasks} deleteTask={deleteTask} completeTask={completeTask} />
                <Footer  activeFilter={filter} changeFilter={changeFilter} />
            </div>
        </>
    }
}

export default connect(({ tasks, filter }) => ({
    tasks,
    filter
}), { addTask, deleteTask, completeTask, changeFilter, deleteCompleted, checkAllTasks, uncheckAllTasks })(ToDo);