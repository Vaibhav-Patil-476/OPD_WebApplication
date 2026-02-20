import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar'

function DoctorLayout() {
  return (
    <div>
      <SideBar/>
        <main>
          <div className='Container-fluid'>
           <Outlet/>
          </div>
        </main>
    </div>
  )
}

export default DoctorLayout