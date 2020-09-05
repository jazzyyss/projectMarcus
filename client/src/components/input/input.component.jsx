import React from "react";
import "./input.styles.scss";

const Input = ({ handleChange, searchBar, label, ...rest }) => {
    return (
        <div className={searchBar ? `searchBarContainer` : `group`}>
            <input
                className={searchBar ? `searchBar` : `form-input`}
                type="text"
                onChange={handleChange}
                {...rest}
            />
            {label ? (
                <label
                    className={`${rest.value.length ? "shrink" : ""} form-input-label`}
                >
                    {label}
                </label>
            ) : null}
        </div>
    );
};

export default Input;