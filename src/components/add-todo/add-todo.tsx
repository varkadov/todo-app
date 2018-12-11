import React from 'react';
import Button from '../ui/button/button';
import Input from '../ui/input/input';
import './add-todo.css';

interface Props {
    onAdd: (value: string) => void;
}

interface State {
    value: string;
}

export default class AddTodo extends React.PureComponent<Props, State> {
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

    private handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { value } = event.target;

        this.setState({ value });
    }

    private handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        const { value } = this.state;

        if (!value) {
            return;
        }
 
        this.props.onAdd(value);
        this.setState({ value: '' })
    }
}