
import { Circle } from '../Cricle'
// import { CiSearch } from 'react-icons/ci'
import { TiArrowSortedDown } from 'react-icons/ti'

export const Option = ({children,type}:{children:React.ReactNode,type:string}) => {
    return (
        <div className="border-r-[1.9px] border-r-[#505050] py-[4px] flex gap-3 items-center">
            <Circle>
                {/* <CiSearch style={{color:"#d9d9d9",width:'21px',height:'21px',fontWeight:'bold'}}/> */}
                {children}
            </Circle>
            <label className="flex items-center">
                <input type="text" placeholder={type} className=" bg-transparent outline-none font-medium text-sm max-w-[130px]" />
                {/* <span className="block font-medium w-[110px] hover:opacity-90 cursor-pointer"></span> */}
                <TiArrowSortedDown style={{color:'white',marginRight:'10px',cursor:'pointer'}}/>
            </label>
        </div>
    )
}
