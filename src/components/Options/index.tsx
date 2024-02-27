import { GrLocation } from "react-icons/gr"
import { CiSearch } from "react-icons/ci";
import { BiSolidShoppingBag } from "react-icons/bi";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { Option } from "./Option";

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from "react";


export const Options = () => {
    const style={color:"#d9d9d9",width:'20px',height:'20px',fontWeight:'bold'}
    const [minMax,setMinMax] = useState<number[]>([10000,30000]);
    const handleOnChange = (value: number[] | number) => {
        if (Array.isArray(value)) {
            setMinMax([value[0], value[1]]);
        } 
    };
    return (
        <div className='py-8 bg-[#141413] text-white'>
            <div className="px-10 max-w-[1400px] mx-auto flex gap-6 justify-between">
                <Option type="Search"><CiSearch style={style}/></Option>
                <Option type="Work location"><GrLocation style={style}/></Option>
                <Option type="Experience"><BiSolidShoppingBag style={style}/></Option>
                <Option type="Per month"><FaRegMoneyBill1 style={style}/></Option>
                <div className="flex flex-[1.5] flex-col justify-between text-[15px] w-full gap-4 max-w-[300px]">
                    <div className="font-medium w-full flex justify-between">
                        Salary range 
                        <span className="">${minMax[0]} - ${minMax[1]}</span>
                    </div>
                    <Slider
                        railStyle={{background:'#535354'}}
                        trackStyle={{background:'#88d1ff'}}
                        dotStyle={{background:'red'}}
                        activeDotStyle={{background:'red'}}
                        defaultValue={[10000,30000]} step={1000} range min={1000} max={50000} allowCross={false}  onChange={handleOnChange}/>
                </div>
                    
            </div>
        </div>
    )
}
