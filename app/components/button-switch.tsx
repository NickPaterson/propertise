import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FloorPlanIcon } from "./custom-icons";
import { faLayerGroup } from "@fortawesome/pro-regular-svg-icons";

interface ButtonSwitchProps {
    icons: IconDefinition[],
}

export function ButtonSwitch(props: ButtonSwitchProps) {
    const { icons } = props;
    const [btnSwitch, setBtnSwitch] = useState("btn-switch-left");

    const handleBtnSwitch = (position: string) => {
        setBtnSwitch(position);
    }


    return (
        <div className="btn-switch-container">
            <div className={`btn-switch ${btnSwitch}`}>
                <button onClick={() => handleBtnSwitch("btn-switch-left")}><FontAwesomeIcon icon={icons[0]} /></button>
                <button onClick={() => handleBtnSwitch("btn-switch-middle")}><FontAwesomeIcon icon={icons[1]} /></button>
                { (icons[2] !== faLayerGroup)
                    ? <button onClick={() => handleBtnSwitch("btn-switch-right")}><FontAwesomeIcon icon={icons[2]} /></button> 
                    : <button onClick={() => handleBtnSwitch("btn-switch-right")}><FloorPlanIcon height={15} width={15} fill="" color=""/></button> 
                }
                
            </div>
        </div>
    )
}