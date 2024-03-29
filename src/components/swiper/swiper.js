import React, { useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";
import Recommended from "../../pages/productItem/Recommended";
import { useGlobalContext } from "../../Context";
import {toTitleCase} from '../../utils'

export default function SwiperItem() {
  const {products, toggleFavorite} = useGlobalContext()
  const recommendedItems = products.map((item, index)=>{
    if(index >= 10 && index <= 13){
        return(
          <SwiperSlide key={item.id}>
            <Recommended
                id={item.id}
                img={item.url} 
                title={toTitleCase(item.name)}
                ethprice={item.price.eth}
                setFavorite={toggleFavorite}
            />
          </SwiperSlide>
        )
      }
    })
  return (
    <>
    {/* Seeting swiper for mobile  */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {recommendedItems}
      </Swiper>
    </>
  );
}
