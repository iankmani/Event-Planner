import React, { useEffect, useState } from 'react'
import { apiUrl } from '../../Utils/config'
import USerCard from '../../UserCard/USerCard';
import './ManageUsers.css'

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        try{
            const response = await fetch (`${apiUrl}/api/users/GetAllUsers`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                  } 
            })
            console.log(response)
            const data = await response.json()
            setUsers(data.allusers);
            console.log(data.allusers);


        }catch (e){
            console.log(e.message)
        }
        
    }
    useEffect(()=>{
        fetchUsers();
    }, []);

  return (
   <>
   <div className='userCard-formation'>
   {users && users.map((user, index) => (
    <USerCard
    key={index}
    userId = {user.id}
    firstname={user.firstname}
    lastname={user.lastname}
    email={user.email}
    phonenumber={user.phonenumber}/>
   ))}
   </div>

   </>
  )
}

export default ManageUsers;