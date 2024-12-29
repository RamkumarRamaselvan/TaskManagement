import React, { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
const Input = (props) => {
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
        onKeyPress,
        maxLength,
    } = props;
    const [inputType, setInputType] = useState(type);
    useEffect(() => {
        setInputType(type);
    }, [type]);
    return (
        <section className={`${coverClassName} input_cover mb-10`}>
            {label && <label className={customlabelClassName}>{label}</label>}
            {error && (
                <div className={`error ${errorClassName}`}>{errorMessage}</div>
            )}
            <input
                type={inputType}
                name={name}
                id={id}
                value={value}
                disabled={disabled}
                onChange={onChange}
                placeholder={placeholder}
                onKeyPress={onKeyPress}
                maxLength={maxLength}
                className={customClassName ? customClassName : "customInput"}
                style={{
                    paddingRight:
                      type == "password" ? "40px" : "auto",
                  }}
            />
            {inputType == "password" && (
                <a
                    className="remove-button-business eyeIcon"
                    onClick={() => {
                        setInputType("text");
                    }}
                >
                    <BsEye />
                </a>
            )}
            {type == "password" && inputType == "text" && (
                <a
                    className="remove-button-business eyeIcon"
                    onClick={() => setInputType("password")}
                >
                    <BsEyeSlash />
                </a>
            )}
        </section>
    )
}

export default Input;