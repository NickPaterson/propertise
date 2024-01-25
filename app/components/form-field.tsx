import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCaretDown } from '@fortawesome/pro-solid-svg-icons';


interface FormFieldProps {
    htmlFor: string,
    label?: string, 
    type?: string,
    value: string,
    onChange?: (...args: unknown[]) => unknown, 
    error?: string,
    icon: IconDefinition,
    placeholder?: string,
    options?: string[] // Add options prop
}

export default function FormField({
    htmlFor, 
    label = "",
    type = "text",
    value,
    icon,
    placeholder = "",
    onChange = () => {},
    error = "",
    options = [] // Initialize options prop
}: FormFieldProps) {
    const [errorMsg, setErrorMsg] = useState(error)

    useEffect(() => {
        setErrorMsg(error)
    }, [error])

    return (
        <div className="form-field">
            {label && <label htmlFor={htmlFor}>{label}</label>}
            
            {type === "select" ? (
            <>
                <div className="icon-container">
                    <div className="icon-after">
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                </div>
                <select
                    onChange={e => {
                        onChange(e) 
                        setErrorMsg('')
                    }}
                    id={htmlFor}
                    name={htmlFor}
                    value={value}
                >
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </>
            ) : (
                <input
                    onChange={e => {
                        onChange(e) 
                        setErrorMsg('')
                    }}
                    type={type}
                    id={htmlFor}
                    name={htmlFor}
                    value={value}
                    placeholder={placeholder}
                />
            )}

            <div className="icon-container">
                <div className="icon-before">
                    <FontAwesomeIcon icon={icon} />
                </div>
            </div>
            
            <div className="form-error-msg">{errorMsg || '' }</div>
        </div>
    )
}