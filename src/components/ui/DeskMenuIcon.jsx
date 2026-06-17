import React from 'react'

const DeskMenuIcon = ({open, toggle}) => {
  return (
    <>
        <div className='flex flex-col px-5 py-5 gap-2 items-center cursor-pointer justify-center bg-primary' onClick={toggle}>
            <span className={`w-5 h-[2px] bg-white ${open && "rotate-146 translate-y-[4.5px]"} transition-transform duration-300`}></span>
            <span className={`w-5 h-[2px] bg-white ${open && "rotate-90 translate-x-[8px]"} transition-transform duration-300`}></span>
            <span className={`w-5 h-[2px] bg-white ${open && "rotate-34 -translate-y-[4.5px]"} transition-transform duration-300`}></span>
        </div>
    </>
  )
}

export default DeskMenuIcon