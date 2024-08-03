import React from 'react';
import { NavLink } from 'react-router-dom';
import { IdeasLogo, Logo, OverviewLogo, TicketsLogo, AgentsLogo, ArticlesLogo, ContactLogo, SettingsLogo, SubscriptionLogo } from "../components/icon";



function Navbar() {
  return (

    <nav className='w-[255px] h-screen bg-[#363740] '>
      <NavLink>
        <div className='flex items-center gap-[12px] px-[40px] pt-[40px] '>
          <Logo/>
          <h1 className='text-[#A4A6B3] font-bold leading-[23px] text-[19px]'>Dashboard Kit</h1>
        </div>
      </NavLink>

      <div className='flex flex-col  pt-[63px]'>
      <NavLink className='flex items-center gap-[24px] p-[24px] border-l-4 border-transparent' to={'/'}>
        <OverviewLogo/><h2 className='text-[#DDE2FF] '>Overview</h2></NavLink>
      <NavLink className='flex items-center gap-[24px] p-[24px] border-l-4 border-transparent' to={'/tickets'}>
        <TicketsLogo/><h2 className='text-[#DDE2FF] '>Tickets</h2>
       </NavLink>
      <NavLink className='flex items-center gap-[24px] p-[24px] border-l-4 border-transparent' to={'/ideas'}>
        <IdeasLogo/><h2 className='text-[#DDE2FF] '>Ideas</h2>
       </NavLink>
      <NavLink className='flex items-center gap-[24px] p-[24px] border-l-4 border-transparent' to={'/contacts'}>
        <ContactLogo/><h2 className='text-[#DDE2FF] '>Contact</h2>
       </NavLink>
      <NavLink className='flex items-center gap-[24px] p-[24px] border-l-4 border-transparent' to={'/agents'}>
        <AgentsLogo/><h2 className='text-[#DDE2FF] '>Agents</h2>
       </NavLink>
      <NavLink className='flex items-center gap-[24px] p-[24px] border-l-4 border-transparent' to={'/articles'}>
        <ArticlesLogo/><h2 className='text-[#DDE2FF] '>Article</h2>
       </NavLink>
      <hr className="my-4 text-[#DFE0EB]/50" />
      <NavLink className='flex items-center gap-[24px] p-[24px] border-l-4 border-transparent' to={'/subscription'}>
        <SubscriptionLogo/><h2 className='text-[#DDE2FF] '>Subscription</h2>
       </NavLink>
      <NavLink className='flex items-center gap-[24px] p-[24px] border-l-4 border-transparent ' to={'/settings'}>
        <SettingsLogo/><h2 className='text-[#DDE2FF] '>Settings</h2>
       </NavLink>
      </div>
      </nav>
  )
}

export default Navbar
