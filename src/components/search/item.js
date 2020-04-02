import React from 'react';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    render() {
        const background = {
            backgroundImage: 'url(' + this.props.image + ')'
        };

        return (
            <li key={this.props.key} data-id={this.props.index}>
                <div className="image">
                    <a href={this.props.link} title={this.props.title} target="_blank" rel="noopener noreferrer">
                        <figure>
                            <div style={background}></div>
                            <img src={this.props.image} alt={this.props.title} />
                        </figure>
                    </a>
                </div>

                <div className="info">
                    <p className="title">{this.props.title}</p>
                    <p className="author">{this.props.author}</p>
                    <p className="description">{this.props.description ? this.props.description : 'Without description'}</p>
                </div>

                <a className="view" href={this.props.link} target="_blank" rel="noopener noreferrer">View</a>
            </li>
        );
    }
};

export default Item;