import React from 'react';
import Form from './form.js';
import List from './list.js';

import './style.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    onSearchSubmit = async list => {
        console.log(list);
        this.setState({ items: list });
    }

    render() {
        return (
            <div className="search">
                <div className="row_1">
                    <div className="container">
                        <Form onSubmit={this.onSearchSubmit} />
                    </div>
                </div>

                <div className="row_2">
                    <div className="container">
                        <List list={this.state.items} />
                    </div>
                </div>
            </div>
        );
    }
};

export default Search;