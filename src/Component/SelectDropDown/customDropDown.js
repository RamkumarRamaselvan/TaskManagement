import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
const CustomDropDown = (props) => {
    const {
        label,
        option,
        name,
        id,
        value,
        onChange,
        customlabelClassName
    } = props;
    return (
        <section className="mb-10">
            {label && <label className={customlabelClassName}>{label}</label>}
            <Form.Select name={name} id={id} value={value} onChange={onChange}>
            {option?.map((data,optionIndex)=>{
                return (
                    <option key={optionIndex} value={data.value}>{data.label}</option>
                )
            })}
        </Form.Select>
        </section>
    )
}

export default CustomDropDown;