import * as React from 'react';
import './input.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    fullWidth?: boolean;
}

export default class Input extends React.PureComponent<Props> {
    render() {
        const { fullWidth, ...props } = this.props;
        const className = fullWidth ? 'input_fullwidth' : '';

        return (
            <input
                {...props}
                className={className} />
        );
    }
}