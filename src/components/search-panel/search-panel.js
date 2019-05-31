import React, {Component} from 'react';

import './search-panel.css';

class SearchPanel extends Component {
  state = {
    search: ''
  }

  onChange = (e) => {
    const search = e.target.value
    console.log(search)
    this.setState({search})
    this.props.onLabelSearch(search)
  }

  render() {

    const {search} = this.state
    return (
        <input type="text"
               className="form-control search-input"
               placeholder="type to search"
               onChange={this.onChange}
               value={search}/>
    );
  }
}

export default SearchPanel;
