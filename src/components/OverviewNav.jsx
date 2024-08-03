import React from 'react'
import {SearchIcon, NotificationIcon} from "../components/icon"
import Photo from "../assets/images/photo.png"

function overviewNav() {
  return (
    <div className='flex items-center gap-[25px]'>
    <SearchIcon/><NotificationIcon/> <span className='h-[32px] bg-[#DFE0EB] w-[1px] pl=[32px]'></span><h2 className='text-[14px] leading-[20px] font-semibold'>Jones Ferdinand</h2>
    <img src={Photo} alt='Photo' className='h-[44px] w-[44px] rounded-full' />
    </div>
  )
}

export default overviewNav
