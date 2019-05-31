import React, {Component} from 'react'

import './add-todo-item.css'

export default class AddTodoItem extends Component {
    state = {
        label: ''
    }
    onLabelChange = (e) => {
        console.log(e.target.value)
        const label = e.target.value
        this.setState({label})
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.setState(({label}) => {
            this.props.onSubmit(label)
            return{
                label: ''
            }
        })
    }
    render() {
        const {label} = this.state
        return (
            <form className="add-todo-item"
                   onSubmit={this.onSubmit}
            >
                <input className='add-item'
                        placeholder="Add New Item"
                        onChange={this.onLabelChange}
                       value={label}
                />
                <button>
                    AddItem
                </button>
            </form>
        )
    }
}