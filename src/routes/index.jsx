import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {OverView, Tickets, Ideas, Contacts, Agents, Articles, Subscription, Settings} from "../pages"
function CustomRoutes() {
  return (
    <div className='w-[1280px] h-[100vh] bg-[#F7F8FC]'>
    <Routes>
        <Route path='/' element={<OverView/>}/>
        <Route path='/tickets' element={<Tickets/>}/>
        <Route path='/ideas' element={<Ideas/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/agents' element={<Agents/>}/>
        <Route path='/articles' element={<Articles/>}/>
        <Route path='/subscription' element={<Subscription/>}/>
        <Route path='/settings' element={<Settings/>}/>
    </Routes>
    </div>
  )
}

export default CustomRoutes
