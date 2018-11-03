import React from 'react';
import PropTypes from 'prop-types';


class AddToDo extends React.Component {

    static propTypes = {
        onAddToDo: PropTypes.func,
    };

    state = {
        title: '',
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onAddToDo(this.state);
        this.setState({ title: '' });
    };

    handleChange = (e) => {
        this.setState({ title: e.target.value });
    };

    handleClear = (e) => {
        this.setState({ title: '' });
    };

    render() {
        const { title } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={title} onChange={this.handleChange} />
                <button type="submit">Add</button>
                <button type="button" onClick={this.handleClear}>Clear</button>
            </form>
        );
    }

}

export default AddToDo;