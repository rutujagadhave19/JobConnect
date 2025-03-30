import axios from 'axios'
import React, { useEffect } from 'react'
import { JOB_API_END_POINT } from '@/utils/constant'
import { useDispatch } from 'react-redux'
import { setAllAdminJobs } from '@/redux/jobSlice'

const useGetAllAdminJobs = () => {
    const dispatch=useDispatch();
   useEffect(()=>{
    const fetchAllAdminJobs= async ()=>{
        try {
            const res=await axios.get(`https://jobconnect-zvze.onrender.com/api/v1/job/getadminJobs`,{withCredentials:true});
            if(res.data.success)
            {
                dispatch(setAllAdminJobs(res.data.jobs));
            }
    
        } catch (error) {
            console.log("error in useGetAllJobs",error)
        }
    }
    fetchAllAdminJobs();
   },[])
}

export default useGetAllAdminJobs