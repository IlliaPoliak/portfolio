import React, { Component } from 'react';
import styles from './TodoHeader.module.css';

class Header extends Component {
    state = {
        checked: false
    }

    handleCheckAll = () => {
        const { checkAllTasks, uncheckAllTasks } = this.props;
        this.setState({
            checked: !this.state.checked
        })
        this.state.checked ? uncheckAllTasks.call() : checkAllTasks.call()
    }

    render() {
        const { amount, all_tasks, deleteCompleted } = this.props;

        return (
            <div className={styles.header}>
                <div className={styles.info}>
                    <span className={styles.allTasks}>All: {all_tasks}</span>
                    <span className={styles.activeTasks}>{all_tasks - amount}</span>
                    <span className={styles.completedTasks}>{amount}</span>
                </div>
                <button className={styles.clearCompleted} onClick={this.handleCheckAll}>Check all</button>
                <button className={styles.clearCompleted} onClick={deleteCompleted}>Clear</button>
            </div>
        )
    }
}

export default Header;