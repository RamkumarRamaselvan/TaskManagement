import React,{useEffect,useState} from "react";

const Input = (props) =>{
    const {
        label,
        type,
        name,
        value,
        customClassName,
        id,
        onChange,
        placeholder,
        customlabelClassName,
        coverClassName,
        disabled,
        error,
        errorMessage,
        errorClassName,
    } = props;

    return(
        <section className={`${coverClassName} input_cover mb-10`}>
            {label && <label className={customlabelClassName}>{label}</label>}
            {error && (
            <div className={`error ${errorClassName}`}>{errorMessage}</div>
            )}
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                disabled={disabled}
                onChange={onChange}
                placeholder={placeholder}
                className={customClassName?customClassName:"customInput"}
            />
        </section>
    )
}

export default Input;