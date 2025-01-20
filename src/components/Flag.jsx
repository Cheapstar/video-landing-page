import { PiCaretDoubleRightBold } from "react-icons/pi";

const STYLES = {
    "success":{
        "wrapper":"flex bg-[#E6F3FC] w-max px-2 py-2 rounded-md gap-2 items-center text-[12px] pr-3",
        "text":"text-[#006A4E]",
        "icon":(<PiCaretDoubleRightBold className="text-[#006A4E]"/>)
    }
}

/* eslint-disable react/prop-types */
export function Flag({type,className="",children}){
    
    return (
        <div className={`${STYLES[type].wrapper} ${className}`}>
            <span className={STYLES[type].text}>
                {children}
            </span>
            <span>
                {STYLES[type].icon}
            </span>
        </div>
    )
}