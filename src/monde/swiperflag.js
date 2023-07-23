import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCube, Pagination } from 'swiper/modules';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {useEffect} from 'react'
//https://restcountries.com/v3.1/all?fields=region
 function SSwiper({listePaysProps}) {
  const {region} = useParams()
const[data , setData]=useState()
  useEffect(()=>{
    axios.get(`https://restcountries.com/v3.1/region/${region}`)
    .then(res=>{
      setData(res.data)
      console.log(res.data)
    })
    .catch(error=>{
      console.log(error)
    })
  },[region])
  return (
    <>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={false}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
       {data ?  data.map(e=> <>
      { console.log(e.name.common)}
          <SwiperSlide>
          <h1>{e.name.common}</h1>

          <img src={e.flags.png} />
        </SwiperSlide>    
        
      </>  ) : ''}
   
    
      
     
      </Swiper>
    </>
  );
}
export default SSwiper