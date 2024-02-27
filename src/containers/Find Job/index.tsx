import SideBar from './SideBar'
import JobsContent from './JobsContent'

export const FindJobPage = () => {
    return (
        <div className="bg-[#f9f9f9]">
            <div className='px-8 max-w-[1400px] mx-auto flex py-6 gap-8 '>
                <SideBar />
                <JobsContent />
            </div>
        </div>
    )
}
