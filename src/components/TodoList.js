import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

class TodoList extends React.Component {

    static propTypes = {
        todos: PropTypes.array,
    };

    render() {
        const { todos } = this.props;
        return (
            <ul>
                {todos.map((item, i) => <TodoItem key={i} item={item} />)}
            </ul>
        );
    }

}

export default TodoList;