import Filter from './Filter'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className='flex-[3]'>
            <div className="h-[300px] w-full bg-[#141413] rounded-3xl p-6">
                <h1 className="text-white text-3xl py-[50px] font-bold">
                    Get Your best<br/> profession <br/>with LuckyJob
                </h1>
                <Link to='' className="bg-[#88d1ff] hover:bg-[#65bcf3] block w-full rounded-s-3xl rounded-e-3xl py-2 text-[#141413] font-bold text-center">
                    Learn more
                </Link>
            </div>
            <Filter />
        </div>
    )
}

export default SideBar