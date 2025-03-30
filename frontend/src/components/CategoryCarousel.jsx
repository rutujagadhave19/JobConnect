import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { toast } from "sonner";
const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
];
const CategoryCarousel = () => {
  const {user}=useSelector(store=>store.auth)
  const dispatch=useDispatch();
  const navigate=useNavigate()
   const searchJobHandler= (query)=>{
    if(user)
    {
      dispatch(setSearchedQuery(query));
    navigate('/browse')
    }
    else{
      toast.error("You need to login first")
    }
    
    }

  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Button onClick={()=>searchJobHandler(cat)} variant="outline" className="rounded-full ">{cat}</Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>


        
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
