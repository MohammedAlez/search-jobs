import { Link } from 'react-router-dom'

export const ErrorElement = () => {
    return (
        <div className='mt-14 text-center '>
            <h1 className="text-3xl font-bold mb-3">Oops!</h1>
            <Link to='/find-job' className='hover:opacity-80 font-bold text-white bg-black p-2 rounded-xl px-3'>Search Jobs</Link>
        </div>
    )
}
