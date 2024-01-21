import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

interface InputDropdownProps {
    icon: IconDefinition;
    placeholder: string;
    classname: string;
}

const InputDropdown: React.FC<InputDropdownProps> = ({ icon, placeholder, classname }) => {
    return (
        <div className="input-dropdown">
            <FontAwesomeIcon icon={icon} className="icon icon-before" />
            <input
                type="text"
                placeholder={placeholder}
                className={classname}
            />
            <FontAwesomeIcon icon={faCaretDown} className="icon icon-after"/>
        </div>
    );
};

export default InputDropdown;
