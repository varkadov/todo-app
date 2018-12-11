import React from 'react'
import './button.css';

type Design = 'blue' | 'red' | 'green';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    design: Design;
    fullWidth?: boolean;
}

export default class Button extends React.Component<Props> {
    render() {
        const { design, fullWidth, ...props } = this.props;
        const className = `button_${design} ` + (fullWidth ? 'button_fullwidth' : '');

        return (
            <button
                {...props}
                className={className} />
        );
    }
}