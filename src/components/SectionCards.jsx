import React from 'react'

function SectionCards() {
  return (
    <ul className='flex items-center px-[68px] gap-[30px] pt-[54px]'>
      <li className='w-[258px] h-[134px] bg-[#FFFFFF] border-[#DFE0EB] border-[1px] rounded-[8px] py-[24px] px-[32px] text-center hover:border-[#3751FF]  '>
        <h2 className='  text-[19px] leading-[23px] text-[#9FA2B4]'>Unresolved</h2>
        <p className='  pt-[12px] text-[40px] leading-[50px] text-[#252733]'>60</p>
      </li>
      <li className='w-[258px] h-[134px] bg-[#FFFFFF] border-[#DFE0EB] border-[1px] rounded-[8px] py-[24px] px-[32px] text-center hover:border-[#3751FF] '>
        <h2 className='  text-[19px] leading-[23px] text-[#9FA2B4]'>Overdue</h2>
        <p className='  pt-[12px] text-[40px] leading-[50px] text-[#252733]'>16</p>
      </li>
      <li className='w-[258px] h-[134px] bg-[#FFFFFF] border-[#DFE0EB] border-[1px] rounded-[8px] py-[24px] px-[32px] text-center hover:border-[#3751FF] '>
        <h2 className='  text-[19px] leading-[23px] text-[#9FA2B4]'>Open</h2>
        <p className='  pt-[12px] text-[40px] leading-[50px] text-[#252733]'>43</p>
      </li>
      <li className='w-[258px] h-[134px] bg-[#FFFFFF] border-[#DFE0EB] border-[1px] rounded-[8px] py-[24px] px-[32px] text-center hover:border-[#3751FF] '>
        <h2 className='  text-[19px] leading-[23px] text-[#9FA2B4]'>On hold</h2>
        <p className='  pt-[12px] text-[40px] leading-[50px] text-[#252733]'>64</p>
      </li>
    </ul>
  )
}

export default SectionCards
 