import axios from 'axios'
import React, { useEffect } from 'react'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { useDispatch } from 'react-redux'
import { setCompanies,  } from '@/redux/companySlice'

const useGetAllCompanies = () => {
    const dispatch=useDispatch();
   useEffect(()=>{
    const fetchCompanies= async ()=>{
        try {
            const res=await axios.get(`https://jobconnect-zvze.onrender.com/api/v1/company/get`,{withCredentials:true});
            if(res.data.success)
            {
                dispatch(setCompanies(res.data.companies));
            }
    
        } catch (error) {
            console.log("error in useGetAllCompanies",error)
        }
    }
    fetchCompanies();
   },[])
}

export default useGetAllCompanies