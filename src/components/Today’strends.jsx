import React from 'react'

function Todaystrends() {
  return (
    <div className=' w-[1112px] bg-white mx-[70px] mt-[30px] border-[#DFE0EB] border-[1px] rounded-[8px] mb-[30px]'>
      <div className='flex justify-between'> 

      <div className='flex flex-col gap-[8px] pl-[32px] pt-[32px]'>
        <h2 className=' text-[19px] text-[#252733] leading-[23px]'>Today’s trends</h2>
        <p className='text-[12px] text-[#9FA2B4] leading-[16px]'>as of 25 May 2019, 09:41 PM</p>
      </div>
      <div className='flex gap-[32px]'>
      <div className='flex  mt-[64px]'>
      <span className='w-[16px] h-[2px] bg-[#3751FF] mt-[7px]'></span><p className='text-[12px] text-[#9FA2B4] leading-[15px]'>Today</p>
      <span className='w-[16px] h-[2px] bg-[#DFE0EB] mt-[7px] ml-[32px]'></span><p className='text-[12px] text-[#9FA2B4] leading-[15px]'>Yesterday</p>
      </div>
      <div className='w-[342px]  '>
        <div className='flex flex-col text-center border-[#DFE0EB] border-l-[1px] border-b-[1px]'>
          <h2 className='text-[#9FA2B4] text-[16px] leading-[22px] pt-[32px]'>Resolved</h2>
          <p className='text-[24px] leading-[30px] text-[#252733] pt-[8px] pb-[24px]'> 449</p>
        </div>
        <div className='flex flex-col text-center border-[#DFE0EB] border-l-[1px] pt-[24px]  border-b-[1px]'>
          <h2 className='text-[#9FA2B4] text-[16px] leading-[22px] pt-[32px]'>Received</h2>
          <p className='text-[24px] leading-[30px] text-[#252733] pt-[8px] pb-[24px]'>426</p>
        </div>
        <div className='flex flex-col text-center border-[#DFE0EB] border-l-[1px] border-b-[1px] '>
          <h2 className='text-[#9FA2B4] text-[16px] leading-[22px] pt-[32px]'>Average first response time</h2>
          <p className='text-[24px] leading-[30px] text-[#252733] pt-[8px] pb-[24px]'>33m</p>
        </div>
        <div className='flex flex-col text-center border-[#DFE0EB] border-l-[1px] border-b-[1px]'>
          <h2 className='text-[#9FA2B4] text-[16px] leading-[22px] pt-[32px]'>Average response time</h2>
          <p className='text-[24px] leading-[30px] text-[#252733] pt-[8px] pb-[24px]'>3h 8m</p>
        </div>
        <div className='flex flex-col text-center border-[#DFE0EB] border-l-[1px]'>
          <h2 className='text-[#9FA2B4] text-[16px] leading-[22px] pt-[32px]'>Resolution within SLA</h2>
          <p className='text-[24px] leading-[30px] text-[#252733] pt-[8px] pb-[24px]'>94%</p>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Todaystrends
