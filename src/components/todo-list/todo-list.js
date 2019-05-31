import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleteItem, onLabelDone, onImportant }) => {

  const elements = todos.map((item) => {
    const { id, important,  ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...itemProps }
                      important={important}
                      onDeleteItem={() => onDeleteItem(id)}
                      onLabelDone={() => onLabelDone(id)}
                      onImportant={() => onImportant(id)}/>
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;
