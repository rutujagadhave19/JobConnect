import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

const StudentProtectedRoute=({children})=>{
  const {user}=useSelector(store=>store.auth);
  const navigate=useNavigate();
  useEffect(()=>{
   if(user==null )
   {
     navigate('/')
   }
  },[]);
  return (
    <>
    {children}
    </>
  )
};
export default StudentProtectedRoute;