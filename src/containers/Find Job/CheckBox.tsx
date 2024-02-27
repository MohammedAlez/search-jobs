import { useState } from "react";
import { FaCheck } from "react-icons/fa";

export const CheckBox = ({text}:{text:string}) => {
    const [checked, setChecked] = useState(false);
    return (
        <label className="flex gap-4 items-center cursor-pointer my-2">
            <input onChange={(e)=>setChecked(e.target.checked)} className="hidden" type="checkbox" name="" id="" />
            <span className={`rounded-md  text-white ${checked ? "bg-black" : "border-2 border-black"} w-[16px] h-[16px] flex justify-center items-center`}>
                <FaCheck style={{fontSize:10}}/>
            </span>
            <span className="font-medium">{text}</span>
        </label>
    )
}

