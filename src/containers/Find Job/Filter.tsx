import { IoMdArrowDropleft } from "react-icons/io";
import { CheckBox } from "./CheckBox";


const Filter = () => {
  return (
    <div className='mt-10 pr-4 border-r-[1.6px] border-r-[#dadada]'>
      <h1 className='flex justify-between font-medium text-xl  items-center '>
        Filters
        <IoMdArrowDropleft />
      </h1>
      <h1 className="mt-6 font-medium mb-3 text-[#93959b]">Working shedule</h1>
      <CheckBox text="Full time"/>
      <CheckBox text="Part time"/>
      <CheckBox text="Internship"/>
      <CheckBox text="Project work"/>
      <CheckBox text="Volunteering"/>
      <h1 className="font-medium mb-3 mt-6 text-[#93959b]">Employment type</h1>
      <CheckBox text="Full day"/>
      <CheckBox text="Flexible shedule"/>
      <CheckBox text="Shift work"/>
      <CheckBox text="Distant work"/>
      <CheckBox text="Shift method"/>
      </div>
  )
}

export default Filter
