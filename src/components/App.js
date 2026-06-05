
import React, { useState,useEffect } from "react";
//import './../styles/App.css';
import { Route,Routes } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

const App = () => {
  let[data,setData]=useState(null)
  
      useEffect(()=>{
          fetch("https://jsonplaceholder.typicode.com/users/")
          .then(res=> res.json())
          .then(user=> {setData(user)})
          .catch(err=> console.log(err))
  
      },[])

        if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<UserList data={data}/>}/>
        <Route path="/users/:id" element={<UserDetails data={data}/>}/>
      </Routes>
        

    </div>
  )
}

export default App
