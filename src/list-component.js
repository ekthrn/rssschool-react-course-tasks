import React from 'react';

class List extends React.Component {
    render() {
        const { items, isLoading } = this.props;  // не this.props.getItems

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        if (!items || items.length === 0) {
            return <p>No items found</p>;
        }

        return (
            <div>
                {items.map((item, index) => (
                    <div key={item.id || index}>
                        <p>{item.first} {item.last}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default List;