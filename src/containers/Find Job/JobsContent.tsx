import { CgOptions } from "react-icons/cg";
import JobsList from './JobsList';

const JobsContent = () => {
  return (
    <div className='lg:flex-[11] '>
      {/* Header */}
      <div className="flex items-end justify-between ">
        <div className="flex items-center gap-3">
          <h1 className='text-[30px] font-bold'>Recommended jobs</h1>
          <span className="pt-[6px] inline-flex justify-center items-center ml-2 p-1 px-3  rounded-s-3xl rounded-e-3xl border border-gray-400 font-bold ">
            386
          </span>
        </div>
        <div className="text-[15px] flex items-center gap-3">
          <span className='text-gray-600 font-medium'>
            Sort by: 
            <span className="font-medium ml-1 text-black ">Last update</span>
          </span>
          <div className="hover:opacity-60">
            <CgOptions style={{cursor:'pointer',width:'23px',height:'23px'}}/>
          </div>
        </div>
      </div>
      <JobsList />
    </div>
  )
}

export default JobsContent