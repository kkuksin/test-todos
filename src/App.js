import React, { Component } from 'react';
import TodoList from './components/TodoList';
import AddToDo from './components/AddToDo';
import { addToDo, fetchToDos } from './api';

class App extends Component {
    state = {
        items: [],
    };

    updateItems = (items) => {
        const itemsArr = Object.keys(items).map((key) => items[key]);
        this.setState({ items: itemsArr });
    };

    async componentDidMount() {
        const res = await fetchToDos();
        this.updateItems(res.data);

    }

    handleAddToDo = async (newTodo) => {
        const res = await addToDo(newTodo);
        this.updateItems(res.data);
    };

    render() {
        return (
            <div className="App">
                <TodoList todos={this.state.items} />
                <AddToDo onAddToDo={this.handleAddToDo} />
            </div>
        );
    }
}

export default App;
