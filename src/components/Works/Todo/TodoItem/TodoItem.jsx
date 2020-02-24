import React, { Component } from 'react';
import './TodoItem.css';
import { connect } from 'react-redux';
import { updateTask } from '../../../../store/reducers/tasks';

class ToDoItem extends Component {
    state = {
        editMode: false
    }

    changeEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    updateTask = (id, e) => {
        const newTaskText = e.currentTarget.value;

        if ((newTaskText.length >= 1 && e.key === 'Enter') || (newTaskText.length >= 1 && e.type === 'blur')) {
            const { updateTask } = this.props;

            updateTask(id, newTaskText)
        
            this.setState({
                taskText: '',
                editMode: !this.state.editMode
            })
        }
    }

    render() {
        let { text, isCompleted, id, deleteTask, completeTask } = this.props;

        let displayElement = '';
        if (this.state.editMode) {
            displayElement = 
            <input autoFocus type='text' className='task-text' defaultValue={text} onBlur={(e)=>this.updateTask(id,e)} onKeyPress={(e)=>this.updateTask(id,e)} />
        } else {
            displayElement = <span className={isCompleted ? 'task-completed task-text' : 'task-text'} onClick={() => completeTask(id)} > {text}</span>
        }

        return (
            <li className={isCompleted ? 'completed todo-task' : 'todo-task'} onDoubleClick={this.changeEditMode} >
                <input className='check-task' type='checkbox' onClick={() => completeTask(id)} />
                {displayElement}
                {!this.state.editMode && <span className='edit-task' onClick={this.changeEditMode}>Edit</span>}
                <div className='close-task' onClick={() => deleteTask(id)}><span>&times;</span></div>
            </li>
        )
    }
};

export default connect(({ tasks }) => ({ tasks}), { updateTask })(ToDoItem);