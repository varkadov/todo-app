import * as React from 'react';
import './input.css';

export interface BrandNewEvent {
    name: string;
    value: string;
    event: React.ChangeEvent<HTMLInputElement>;
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    fullWidth?: boolean;
    onChange?: (event: BrandNewEvent) => void;
}

export default class Input extends React.PureComponent<Props> {
    render() {
        const { fullWidth, onChange, ...props } = this.props;
        const className = fullWidth ? 'input_fullwidth' : '';

        return (
            <input
                {...props}
                onChange={this.handleChange}
                className={className} />
        );
    }

    private handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { onChange } = this.props;

        if (!onChange) {
            return null;
        }

        const { value, name } = event.target;

        onChange({
            name,
            value,
            event,
        });
    }
}