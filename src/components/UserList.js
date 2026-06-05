
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const UserList=({data})=>{
    

    return (<div>
      

      
  {  data &&   <div> <h1>User List</h1>
        <ol>
        {
            data.map((use)=>
            <li key={use.id}><Link to={`./users/${use.id}`}>{use.name}</Link></li>)
        }

        </ol>
        </div>
}
     </div>)

    
}

export default UserList