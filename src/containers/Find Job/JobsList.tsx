import { useEffect, useState } from 'react'
import { Job } from '../../utils/types'
import JobCard from './JobCard'



const JobsList = () => {
    const [jobs, setJobs] = useState<Job[]>([])
    useEffect(()=>{
        const dataFetching=async()=>{
            const res = await fetch('/jobs.json')
            const data = await res.json();
            setJobs(data.data);
        }
        dataFetching();
    },[])
    return (
        <div className="grid grid-cols-3 gap-4   mt-8">
            {jobs.map((job:Job)=>{
                return <JobCard key={job.imgUrl} job={job}/>
            })}
        </div>
    )
}

export default JobsList