import React from 'react';
import './formbutton.styles.scss'
const FormButton = ({ children, commentButton, blogButton, ...rest }) => {
    return (
        <div className={`button-container ${commentButton ? 'comment-button' : blogButton ? 'blog-button' : ''}`}>
            <button className="button" {...rest}>{children}</button>
        </div>
    );
}

export default FormButton;