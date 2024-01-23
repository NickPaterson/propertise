import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface FormFieldProps {
    htmlFor: string,
    label: string, 
    type?: string,
    value: string,
    onChange?: (...args: unknown[]) => unknown, 
    error?: string,
    icon: IconDefinition;
}

export function FormField({
    htmlFor, 
    label,
    type = "text",
    value,
    icon,
    onChange = () => {},
    error = ""
}: FormFieldProps) {
    const [errorMsg, setErrorMsg] = useState(error)

    useEffect(() => {
        setErrorMsg(error)
    }, [error])

    return (
        <>
            <label htmlFor={htmlFor}>{label}</label>
            <FontAwesomeIcon icon={icon} className="icon icon-before" />
            <input onChange={e => {
                onChange(e) 
                setErrorMsg('')}
            }   type={type} id={htmlFor} name={htmlFor} value={value} />
            <div className="form-error-msg">{errorMsg || '' }</div>
        </>
    )
}