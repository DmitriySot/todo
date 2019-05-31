import React, {Component} from 'react';

import './item-status-filter.css';

class ItemStatusFilter extends Component {
    state = {
        filter: ''
    }
    buttons = [
       { name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: "Done"}
    ]
    render() {
        const {onFilterClick} = this.props
        const {filter} = this.props
        const buttons = this.buttons.map( ({name, label}) => {
            const isActive = filter === name
            const clazz = isActive? 'btn-secondary' : 'btn-outline-secondary'
            return <button type="button"
                           key={name}
                           className={`btn ${clazz}`}
                            onClick={() => onFilterClick(name)}>
                      {label}
                   </button>
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}

export default ItemStatusFilter;
