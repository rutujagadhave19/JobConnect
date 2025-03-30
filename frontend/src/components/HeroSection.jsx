import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'sonner';

const HeroSection = () => {
  const {user}=useSelector(store=>store.auth);
 const [query,setQuery]=useState("");
 const dispatch=useDispatch();
 const navigate=useNavigate();
 
  const searchJobHandler= ()=>{
    if(user)
    {
      dispatch(setSearchedQuery(query));
      navigate('/browse')
    }
    else{
      toast.error("You need to login first");
    }
  
  }

  return (
    
    <div className='text-center'>
        <div className='flex flex-col gap-5 my-10'>
        <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#f83002] font-medium'>No. 1 Job Hunt Platform</span>
        <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#683ac2]'>Dream Jobs</span></h1>
        <p>Find Your Perfect Job with Just a Click!</p>

        
      <div className='flex w-[40%] shadow-lg border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
       
        <input 
        type="text" 
        placeholder='Find Your Dream Jobs'
        name="name"
        
        onChange={(e)=>setQuery(e.target.value)}
        className='outline-none border-none w-full'
        />
        <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6a38c2]">
            <Search className='h-5 w-5'/>
        </Button>
      </div>
        </div>
    
    </div>
  )
}

export default HeroSection