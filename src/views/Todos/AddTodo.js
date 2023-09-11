import React from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import classNames from "classnames/bind";
import styles from './ListTodo.module.scss'

const cx = classNames.bind(styles)

class AddTodo extends React.Component {

    state = {
        title: '',
    }
    handleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleAdd = () => {
        if (!this.state.title) {
            toast.error(`Missing title's Todo !`)
            return;
        }
        const todo = {
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
        }

        this.props.addNewTodo(todo)
        toast.success('Wow so easy!')
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state
        return (
            <div className={cx("add-todo")}>
                <input value={title} type="text" onChange={(e) => this.handleChange(e)} />
                <button className={cx('add')} onClick={() => this.handleAdd()}>Add</button>
                <ToastContainer />
            </div>
        );
    }
}

export default AddTodo;