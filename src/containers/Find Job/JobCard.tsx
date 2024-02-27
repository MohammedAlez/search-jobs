import { useState } from 'react'
import { Job } from '../../utils/types'
import { LuBookmark } from "react-icons/lu";
import { MdOutlineBookmark } from "react-icons/md";
import { Link } from 'react-router-dom';

const JobCard = ({job}:{job:Job}) => {
  const [saved, setSaved] = useState(false);
  return (
    <div className={` border-[1.6px] border-[#dadada] rounded-3xl p-[6px] `}>
      <div style={{background:job.backgroundColor}} className={`h-[280px] rounded-3xl p-4 flex flex-col justify-between  gap-3`}>
        <div className="">
          <div className="flex justify-between items-center">
            <span className="block bg-white rounded-3xl p-2 px-3 text-sm font-medium">{job.date}</span>
            <div className="bg-white rounded-full">
              <span onClick={()=>setSaved(!saved)} className="hover:opacity-80 cursor-pointer rounded-full p-2 bg-white  w-[36px] h-[36px] flex justify-between items-center">
                {saved 
                ? <MdOutlineBookmark style={{fontSize:20}}/>
                : <LuBookmark style={{fontSize:20}}/>}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-end mt-6">
            <div className="">
              <span className="font-medium">{job.company}</span>
              <h1 className="text-2xl font-medium block">{job.jobTitle}</h1>
            </div>
            <div className="rounded-full bg-white flex justify-center items-center  min-w-[35px] min-h-[35px] overflow-hidden">
              <img className="w-[35px] h-[35px]" src={job.imgUrl} alt="" />
            </div>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          {job.options.map((e)=>{
            return <div key={e} className="p-1  rounded-2xl border border-gray-500 text-gray-500 font-bold px-2 text-[13px]">
              {e}
            </div>
          })}
        </div>
      </div>
      <div className="p-4 flex justify-between items-center pb-[14px]">
        <div className="">
          <span className="block font-bold text-[15px] text-[#141413]">${job.salaryPerHour}/hr</span>
          <span className="text-gray-500 text-sm mt-[-2px] block font-medium">{job.workLocation}</span>
        </div>
        <Link to='' className='hover:bg-[#1d1d1cd5] bg-[#141413] rounded-3xl text-white text-[15px] font-medium p-[6px] px-3 flex items-center'>Details</Link>
      </div>
    </div>
  )
}

export default JobCard