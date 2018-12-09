import React from 'react';
import Button from '../button/button';
import Input from '../input/input';
import './add-todo.css';

export default class AddTodo extends React.PureComponent {
    state = { value: '' }

    render() {
        const { value } = this.state;

        return (
            <form
                className='form'
                onSubmit={this.handleSubmit}>
                <div className='col_1'>
                    <Input
                        fullWidth
                        value={value}
                        onChange={this.handleChange} />
                </div>
                <div className='col_2'>
                    <Button
                        fullWidth
                        disabled={!value}>
                        Add
                    </Button>
                </div>
            </form>
        )
    }

    handleChange = (event) => {
        const { value } = event.target;

        this.setState({ value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { value } = this.state;

        if (!value) {
            return;
        }
 
        this.props.onAdd(value);
        this.setState({ value: '' })
    }
}