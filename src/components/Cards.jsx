import React from 'react'
import { SortIcon, FilterIcon } from './icon'

function Cards() {
  return (
    <>
    <div  className='h-screen overflow-y-auto'>
    <div className='w-[1120px] h-[942px] border-[1px] mt-[54px] border-[#FFFFFF] rounded-[8px] bg-white mx-auto p-[32px]'>
        <div className='flex items-center justify-between '>
            <h1 className='text-[19px] text-[#252733] leading-[23px] font-bold'>All tickets</h1>
            <div className='flex items-center gap-[32px]'>
                <div className='flex items-center gap-[8px]'>
                    <SortIcon/>
                <p className='text-[14] leading-[20px] text-[#4B506D] font-semibold' >Sort</p>
                </div>
                <div className='flex items-center gap-[8px]'>
                <FilterIcon/>
                <p className='text-[14] leading-[20px] text-[#4B506D] font-semibold' >Sort</p>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-between pt-[87px]'>
          <p className='text-[#9FA2B4] text-[14px] leading-[17px] font-bold'>Ticket details</p>
          <div className='flex gap-[130px] pr-[85px]'>
          <p className='text-[#9FA2B4] text-[14px] leading-[17px] font-bold'>Customer name</p>
          <p className='text-[#9FA2B4] text-[14px] leading-[17px] font-bold'>Date</p>
          <p className='text-[#9FA2B4] text-[14px] leading-[17px] font-bold'>Priority</p>
          </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Cards
