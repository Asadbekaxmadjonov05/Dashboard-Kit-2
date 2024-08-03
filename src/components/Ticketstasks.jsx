import React from 'react'

function Ticketstasks() {
  return (
    <div className='flex justify-between mx-[70px]'>
      <div className='w-[546px] bg-white border-[#DFE0EB] border-[1px] rounded-[8px]'>
        <div className=' px-[32px] pt-[37px]'>
            <div className='flex justify-between items-center '>
                <div>
                    <h1 className='text-[19px] text-[#252733] leading-[23px] pb-[8px] font-normal'>Unresolved tickets</h1>
                    <span className='text-[#9FA2B4] text-[12px] leading-[15px] flex items-center'>
                    Group:
                    <p className=' text-[12px] leading-[15px] text-black'>Support</p>
                    </span>
                </div> 
                <p className='text-[#3751FF] text-[14px] leading-[23px]'>View details</p>
            </div>
            <div className='flex justify-between items-center pt-[32px]'>
                <h2 className= 'leading-[20px] text-[#252733] text-[14px] font-semibold'>Waiting on Feature Request</h2>
                <p className='text-[#9FA2B4]'>4238</p>
            </div>
        </div>
        <div className='flex justify-between px-[32px] border-y-[1px] border-[#DFE0EB] py-[19px] mt-[16px]'>
            <h2 className='text-[14px] leading-[20px] text-[#252733] font-semibold'>Awaiting Customer Response</h2>
            <p className='text-[#9FA2B4]'>1005</p>
        </div>
        <div className='flex justify-between px-[32px] border-y-[1px] border-[#DFE0EB] py-[19px]'>
            <h2 className='text-[14px] leading-[20px] text-[#252733] font-semibold'>Awaiting Developer Fix</h2>
            <p className='text-[#9FA2B4]'>914</p>
        </div>
        <div className='flex justify-between px-[32px] border-y-[1px] border-[#DFE0EB] py-[19px]'>
            <h2 className='text-[14px] leading-[20px] text-[#252733] font-semibold'>Awaiting Customer Response</h2>
            <p className='text-[#9FA2B4]'>281</p>
        </div>
      </div>
      <div className='w-[546px]  bg-white border-[#DFE0EB] border-[1px] rounded-[8px]'>
      <div className=' pt-[37px]'>
            <div className='flex justify-between items-center px-[32px] '>
                <div>
                    <h1 className='text-[19px] text-[#252733] leading-[23px] pb-[8px] font-normal'>Tasks</h1>
                    <p className=' text-[12px] leading-[15px] text-[#9FA2B4]'>Today</p>
                </div> 
                <p className='text-[#3751FF] text-[14px] leading-[23px]'>View all</p>
            </div>
            <div className='flex justify-between items-center px-[32px] pt-[32px]'>
                <h2 className= 'leading-[20px] text-[#252733] text-[14px] font-semibold'>Create new task</h2>
<button
  class="group cursor-pointer outline-none hover:rotate-90 duration-300"
  title="Add New"
>
  <svg
    class="stroke-teal-500 fill-none group-hover:fill-teal-800 group-active:stroke-teal-200 group-active:fill-teal-600 group-active:duration-0 duration-300"
    viewBox="0 0 24 24"
    height="50px"
    width="50px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke-width="1.5"
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
    ></path>
    <path stroke-width="1.5" d="M8 12H16"></path>
    <path stroke-width="1.5" d="M12 16V8"></path>
  </svg>
</button>
                
            </div>
            <hr className='border-y-[1px] border-[#DFE0EB] mt-[18px]' />
            <div className='flex justify-between px-[32px] py-[17px]'>
              <div className='flex gap-[16px] items-center'>
              <input type="checkbox" className='dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-[15px] h-[15px]'/>
              <h2>Finish ticket update</h2>
              </div>
              <button className='w-[74px] h-[24px] rounded-[8px] text-[11px] leading-[13px] text-white py-[5px]  px-[12px] bg-[#FEC400]'>
              Urgent
              </button>
            </div>
            <hr className='border-y-[1px] border-[#DFE0EB]' />
            <div className='flex justify-between px-[32px] py-[17px]'>
              <div className='flex gap-[16px] items-center'>
              <input type="checkbox" className='dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-[15px] h-[15px]'/>
              <h2>Create new ticket example</h2>
              </div>
              <button className='w-[54px] h-[24px] rounded-[8px] text-[11px] leading-[13px] text-white py-[5px]  px-[12px] bg-[#29CC97]'>
              New
              </button>
            </div>
            <hr className='border-y-[1px] border-[#DFE0EB]' />
            <div className='flex justify-between px-[32px] py-[17px] pb-[17px]'>
              <div className='flex gap-[16px] items-center'>
              <input type="checkbox" className='dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-[15px] h-[15px]'/>
              <h2>Update ticket report</h2>
              </div>
              <button className='w-[74px] h-[24px] rounded-[8px] text-[11px] leading-[13px] text-[#9FA2B4]  py-[5px]  px-[12px] bg-[#F0F1F7]'>
              Default
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Ticketstasks
