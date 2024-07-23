import React from 'react'
import EventCard from '../Pages/EventCard/EventCard'
import AdminEventList from '../Pages/Explore/AdminEventList'
import AdminHeader from '../Components/AdminHeader/AdminHeader'




const Admin = () => {
  return (
    <>
    <AdminHeader/>
    <div>
        <AdminEventList/>

    </div>
   
    </>
  )
}

export default Admin
