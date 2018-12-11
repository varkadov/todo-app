import React from 'react'
import './button.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color: 'blue' | 'red';
    fullWidth?: boolean;
}

export default class Button extends React.Component<Props> {
    render() {
        const { color, fullWidth, ...props } = this.props;
        const className = `button_${color} ` + (fullWidth ? 'button_fullwidth' : '');

        return (
            <button
                {...props}
                className={className} />
        );
    }
}