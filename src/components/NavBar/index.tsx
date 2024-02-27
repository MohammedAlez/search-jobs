
import { NavLink, useLocation } from 'react-router-dom'
import { FaRegCompass  } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { LuSettings } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { Circle } from '../Cricle';

const links = [
    {title:"Find job", path:''},
    {title:"Messages", path:'messages'},
    {title:"Hiring", path:'hiring'},
    {title:"Community", path:'community'},
    {title:"FAQ", path:'faq'},
]

export const NavBar = () => {
    return (
        <div className="bg-[#141413] ">
            <div className='px-10 max-w-[1400px] mx-auto  text-[#d9d9d9] border-b border-b-[#505050] flex items-center justify-between'>
                <div className="flex gap-14">
                    {/* LOGO */}
                    <div className="flex items-center gap-2 text-white">
                        <FaRegCompass  style={{fontSize:30,}}/> 
                        <span className="text-white font-bold text-[22px] font-orkney">LuckyJob</span>
                    </div>
                    {/* Links */}
                    <div className="flex items-center gap-6">
                        {links.map((e)=><CustomLink {...e}/>)}
                    </div>
                </div>

                <div className="flex gap-14">
                    {/* Location */}
                    <div className="flex items-center gap-2 text-sm font-medium">
                        <GrLocation style={{color:"#505050",width:'21px',height:'21px'}}/> New York, NY
                        </div>
                    {/* Settings */}
                    <div className="flex gap-2 items-center ">
                        <div className=" cursor-pointer rounded-full border bg-red-300 w-[34px] h-[34px] flex items-center justify-center relative before:content-[''] before:top-[-1px] before:right-[-1px] before:absolute before:bg-[#88d1ff] before:w-[10px] before:h-[10px] before:rounded-full before:border before:border-black">
                            <img src="/adam.jpg" alt="" className="rounded-full w-full h-full" />
                        </div>
                        <Circle>
                            <IoNotificationsOutline />
                        </Circle>
                        <Circle>    
                            <LuSettings />
                        </Circle>
                    </div>
                </div>
                
            </div>
        </div>
    )
}


const CustomLink=(e:{title:string,path:string})=>{
    const location = useLocation();
    const currentUrl = location.pathname;
    return (<NavLink to={e.path} 
        key={e.title}
        className={` hover:text-[#b1b1b1]  text-[#d9d9d9] py-6 text-sm block font-medium 
                    ${currentUrl=='/'+e.path && ' border-white border-b-2'}`} 
        >
        {e.title}
    </NavLink>)
}
