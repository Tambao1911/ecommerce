import React from "react";
import { toast } from "react-toastify";

import classNames from "classnames/bind";
import styles from './ListTodo.module.scss'
import AddTodo from "./AddTodo";

const cx = classNames.bind(styles)
class ListTodo extends React.Component {
    state = {
        listTodo: [
            {
                id: 1,
                title: "React",
            },
            {
                id: 2,
                title: "Javascrip",
            },
            {
                id: 3,
                title: "Html, Css",
            },
        ],
        editTodo: {}
    };

    addNewTodo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo]
        })

    }

    handlDelete = (todo) => {
        let newTodo = this.state.listTodo;
        newTodo = newTodo.filter(item => item.id !== todo.id)
        this.setState({
            listTodo: newTodo
        })
        toast.success('Delete succses!')
    }
    handleEdit = (todo) => {
        let { listTodo, editTodo } = this.state
        const isEmptyObj = Object.keys(editTodo).length === 0
        // Save
        if (!isEmptyObj && editTodo.id === todo.id) {
            let listTodoCopy = [...listTodo]
            let objIndex = listTodoCopy.findIndex((item => item.id === todo.id));
            listTodoCopy[objIndex].title = editTodo.title
            this.setState({
                listTodo: listTodoCopy,
                editTodo: []
            })

            toast.success('Update Todo Succses')
            return;
        }
        this.setState({
            editTodo: todo,
        })
    }
    handleChangeEdit = (e) => {
        let newEditTodo = { ...this.state.editTodo }
        newEditTodo.title = e.target.value
        this.setState({
            editTodo: newEditTodo
        })
    }

    render() {
        let { listTodo, editTodo } = this.state;
        const isEmptyObj = Object.keys(editTodo).length === 0
        return (

            <div className={cx("list-todo-container")}>
                <p>Simple Todo App</p>
                <AddTodo addNewTodo={this.addNewTodo} />
                <div className={cx("list-todo-content")}>
                    {listTodo && listTodo.length > 0 && listTodo.map((item, index) => (
                        <div key={item.id} className={cx("todo-child")}>
                            {isEmptyObj ?
                                <span>{index + 1}-{item.title}</span>
                                :
                                <>
                                    {
                                        editTodo.id === item.id ?
                                            <input value={editTodo.title} onChange={(e) => this.handleChangeEdit(e)} />
                                            :
                                            <span>{index + 1} - {item.title}</span>
                                    }
                                </>
                            }
                            <button className={cx('edit')} onClick={() => this.handleEdit(item)}>
                                {!isEmptyObj && editTodo.id === item.id ?
                                    'Save' : 'Edit'
                                }
                            </button>
                            <button onClick={() => this.handlDelete(item)} >Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ListTodo;
