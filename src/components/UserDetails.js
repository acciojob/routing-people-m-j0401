
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";


const UserDetails=({data})=>{
 let[user,setUser]=useState(null)
    let {id}=useParams();
    

  useEffect(()=>{
let ide=setTimeout(()=>{
    let dt=data.find((dta)=> dta.id==Number(id))
    setUser(dt)
},1000)
  
  return (()=> clearTimeout(ide))

},[setUser])


if(!user)
{
    return<div>Loading...</div>
}

    return (<div>

  
{user &&  <div>
     <h1>User Details</h1>
<p>Name: {user.name}
    <br/>
  Username: {user.username}
  <br/>
  Email: {user.email}
  <br/>
  Phone: {user.phone}
  <br/>
  Website: {user.website}</p>
  </div>
}
    </div>)
}

export default UserDetails;