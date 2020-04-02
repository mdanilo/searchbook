import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            list: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        console.log('Um nome foi enviado: ' + this.state.value);
        event.preventDefault();

        let init = 'https://www.googleapis.com/books/v1/volumes?q=search+' + this.state.value;
        let url = init.replace(/ /g, '+');

        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({ list: result.items });
                    this.props.onSubmit(this.state.list);
                }
            )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" placeholder="O que você deseja ler?" required value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Buscar" />
                </div>
            </form>
        );
    }
}

export default Form;