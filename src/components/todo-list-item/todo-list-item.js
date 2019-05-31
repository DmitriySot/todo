import React, {Component} from 'react';

import './todo-list-item.css';

class TodoListItem extends Component {
    render() {
        const {important, done, label, onLabelDone, onDeleteItem, onImportant } = this.props
        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };
       let className = "todo-list-item"
        if(done) {
            className += ' done'
        }
        if(important) {
            className += ' important'
        }
        return (
            <span className={className}>
              <span
                  className="todo-list-item-label"
                  onClick={onLabelDone}
                  style={style}>
                {label}
              </span>

              <button type="button"
                      className="btn btn-outline-success btn-sm float-right"
                       onClick={onImportant}>
                <i className="fa fa-exclamation" />
              </button>

              <button type="button"
                      className="btn btn-outline-danger btn-sm float-right"
                      onClick={onDeleteItem}   >
                <i className="fa fa-trash-o" />
              </button>
            </span>
        );
    }
}


export default TodoListItem;
