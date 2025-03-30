import axios from 'axios'
import React, { useEffect } from 'react'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { useDispatch } from 'react-redux'
import { setAllJobs } from '@/redux/jobSlice'
import { setSingleCompany } from '@/redux/companySlice'

const useGetCompanyById = (companyId) => {
    const dispatch=useDispatch();
   useEffect(()=>{
    const fetchSingleCompany= async ()=>{
        try {
            const res=await axios.get(`https://jobconnect-zvze.onrender.com/api/v1/company/get/${companyId}`,{withCredentials:true});
            if(res.data.success)
            {
                dispatch(setSingleCompany(res.data.company));
            }
    
        } catch (error) {
            console.log("error in useGetAllJobs",error)
        }
    }
    fetchSingleCompany();
   },[companyId,dispatch])
}

export default useGetCompanyById