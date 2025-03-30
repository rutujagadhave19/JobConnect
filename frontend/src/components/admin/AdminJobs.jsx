import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import AdminJobsTable from './AdminJobsTable'
import useGetAllAdminJobs from './useGetAllAdminJobs'
import { setsearchJobByText } from '@/redux/jobSlice'

const AdminJobs = () => {
  useGetAllAdminJobs()
  const [input,setInput]=useState("")
  const dispatch=useDispatch();
  const navigate=useNavigate();
  useEffect(()=>{
   dispatch(setsearchJobByText(input));
  },[input])
  return (
    <div>
        <Navbar/>
        <div className=' max-w-6xl mx-auto my-10'>
          <div className='flex items-center justify-between my-5'>
          <Input className="w-fit" placeholder="Company Name, Role..." onChange={(e)=>{setInput(e.target.value)}}/>
          <Button onClick={()=>navigate("/admin/jobs/create")} >New Jobs</Button>
          </div>
          <AdminJobsTable/>
        </div>
    </div>
  )
}

export default AdminJobs