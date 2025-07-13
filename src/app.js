import React from 'react';
import Input from './search-component.js';
import List from './list-component.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            items: []
        }
    }

    handleFilter = (text) => {
    console.log('Фильтрация по:', text);
  }

  render() {
    return (
        <center>
            <div>
                <Input filter={this.handleFilter} />
                <List
                    items={this.state.items}
                    isLoading={this.state.isLoading}
                />
            </div>
        </center>
    );
  }
}

export default App;
