import React from 'react'
import './button.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    fullWidth?: boolean;
}

export default class Button extends React.Component<Props> {
    render() {
        const { fullWidth, ...props } = this.props;
        const className = fullWidth ? 'button_fullwidth' : '';

        return (
            <button
                {...props}
                className={className} />
        );
    }
}