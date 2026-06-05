
import React, { useState } from "react";

import { useParams } from "react-router-dom";


const UserDetails=({data})=>{

    let {id}=useParams();

    if(!data)
    {
        return <div>Loading....</div>
    }

let user=data.find((dta)=> dta.id==Number(id))

if(!user)
{
    return<div>User not Found!</div>
}

    return (<div>
     <h1>User Details</h1>
<p>Name: {user.name}
    <br/>
  Username:{user.username}
  <br/>
  Email: {user.email}
  <br/>
  Phone: {user.phone}
  <br/>
  Website: {user.website}</p>
  
    </div>)
}

export default UserDetails;