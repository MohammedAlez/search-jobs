

export const Circle = ({children}:{children:React.ReactNode}) => {
    return (
        <div className="w-[39px] h-[39px] cursor-pointer rounded-full border hover:opacity-[0.7] border-[#505050] flex items-center justify-center p-2">
            {children}
        </div>
    )
}
