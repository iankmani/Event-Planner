import React from 'react'
import AdminEventList from '../Pages/Explore/AdminEventList'
import AdminHeader from '../Components/AdminHeader/AdminHeader'
import ManageEvents from '../Pages/ManageEvents/ManageEvents'




const Admin = () => {
  return (
    <>
    {/* <AdminHeader/> */}
    <div>
        <AdminEventList/>
        <ManageEvents/>

    </div>
   
    </>
  )
}

export default Admin
