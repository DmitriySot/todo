import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddTodoItem from '../add-todo-item'

import './app.css';

class App extends Component {
    startId = 1;
    state = {
        todoData : [
            this.createNewItem('Drink Coffee'),
            this.createNewItem('Make Awesome App'),
            this.createNewItem('Have a lunch')
        ],
        search: '',
        filter: 'all'
    }
    createNewItem(label) {
        return{
            label,
            important: false,
            done: false,
            id: this.startId++
        }
    }
    toggleProps(id, arr, name) {
        const idx = arr.findIndex( item => item.id === id )
        const oldItem = arr[idx]
        const newItem = {...oldItem, [name]: !oldItem[name]}
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ]

    }
    onDeleteItem = (id) => {
       this.setState(({todoData}) => {
           const idx = todoData.findIndex(item => item.id === id )
           const newArr = [
               ...todoData.slice(0, idx),
               ...todoData.slice(idx + 1)
           ]
           console.log(newArr, 'newArr')
           return {
               todoData: newArr
           }
       })
    }
    onLabelDone = (id) => {
       this.setState(({todoData}) => {
           const idx = todoData.findIndex(item => item.id === id)
           const oldItem = todoData[idx]
           const newItem = {...oldItem, done: !oldItem.done}
           const newArr = [
               ...todoData.slice(0, idx),
               newItem,
               ...todoData.slice(idx + 1)
           ]
           console.log(newItem, 'newItem')
           return {
               todoData: newArr
           }
       })

    }
    onImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProps(id, todoData, 'important')
            }

        })
    }
    onSubmit = (label) => {

        const newItem = this.createNewItem(label)
        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                newItem
            ]
            return {
                todoData: newArr
            }
        })
    }

    searchTodo = (items, searchItem) => {
        if(searchItem.length === 0) {
            return items
        }
        return items.filter((item) => {
            return item.label.toLowerCase().includes(searchItem.toLowerCase())
        })
    }
    onLabelSearch = (search) => {
        this.setState({search})
    }
    filterTodo = (items, filter) => {
        switch (filter) {
            case 'all':
                return items;
            case 'active' :
                return items.filter( item => !item.done);
            case 'done' :
                return items.filter(item => item.done);

            default :
                return items
        }
    }
    onFilterClick = (filter) => {
        this.setState({filter})
    }
    render() {
        const {todoData, search, filter} = this.state
        const visibleTodo = this.filterTodo(this.searchTodo(todoData, search), filter)
        const doneTodo = todoData.filter(item => item.done).length
        const todo = todoData.length - doneTodo
        return (
            <div className="todo-app">
                <AppHeader toDo={todo} done={doneTodo} />
                <div className="top-panel d-flex">
                    <SearchPanel onLabelSearch={this.onLabelSearch}/>
                    <ItemStatusFilter onFilterClick={this.onFilterClick}
                                      filter={filter}  />
                </div>

                <TodoList todos={visibleTodo}
                          onDeleteItem={this.onDeleteItem}
                          onLabelDone={this.onLabelDone}
                          onImportant={this.onImportant}/>

                <AddTodoItem onSubmit={this.onSubmit} />
            </div>
        );
    }


};

export default App;
