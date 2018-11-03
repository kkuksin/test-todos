import React from 'react';
import PropTypes from 'prop-types';


class TodoItem extends React.Component {

    static propTypes = {
        item: PropTypes.shape({
            title: PropTypes.string,
        }),
    };

    render() {
        const { item } = this.props;
        return (
            <li>{item.title}</li>
        );
    }
}

export default TodoItem;