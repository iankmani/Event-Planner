import React from 'react'
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import './Usercard.css'

const USerCard = ( userId) => {
    console.log(userId);
    const handleDeleteUser = async(id) => {
        try{
            const response = await fetch (`http://localhost:3000/api/users/DeleteUser/${id}`,{
                method: "DELETE",
                credentials: "include"
            })
            const data = await response.json();
            console.log(data)
        }catch(e){
            console.log(e)
        }
    }
  return (
    <div className='userCard_Container'>
        <div className="usercard" key={userId}>
            <div className="name-of-user">
                <h5><CgProfile />  {userId.firstname} {userId.lastname}</h5>
            </div>
            <div className="email-of-user">
                <p><MdEmail />  {userId.email}</p>
            </div>
            <div className="number-of-users">
                <p><FaPhoneAlt />  {userId.phonenumber}</p>
            </div>
            <div className="user-buttons">
                <button>Accept</button>
                <button onClick={() => handleDeleteUser(userId.userId)}>Decline</button>
            </div>
        </div>
    </div>
  )
}

export default USerCard