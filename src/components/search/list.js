import React from 'react';
import Item from './item.js';

const List = (props) => {    
    return (
        <ul>
            {props.list.map((item, i) => 
                <Item 
                    key={item.id}
                    link={item.volumeInfo.infoLink}
                    image={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : '#'}
                    title={item.volumeInfo.title}
                    author={item.volumeInfo.authors ? item.volumeInfo.authors[0] : 'Unknown'}
                    description={item.volumeInfo.description}
                />
            )}
        </ul>
    );
};

export default List;