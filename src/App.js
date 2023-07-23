import  Navbar  from './monde/Navbar'
import  Corps  from './monde/Corps'
import  Pays  from './monde/Pays'
import  Payscode  from './monde/Payscode'
import  Footer  from './monde/Footer'
import { MDBSpinner } from 'mdb-react-ui-kit';
import Swiper from './monde/swiperflag'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Routes,Route, BrowserRouter } from 'react-router-dom';

function App() {
  const url='https://restcountries.com/v3.1/all'
  const [listePays,setListePays]=useState([])
  const [isloading,setIsloading]=useState(false)
  const colorRegions=[
    {
      "region":"Europe",
      "color":"primary"
    },
    {
      "region":"Africa",
      "color":"danger"
    },
    {
      "region":"Americas",
      "color":"secondary"
    },
    {
      "region":"Oceania",
      "color":"warning"
    },
    {
      "region":"Asia",
      "color":"success"
    },
    {
      "region":"Antarctic",
      "color":"info"
    }
  ]

  useEffect(()=>{
    axios.get(url)
    .then(response=>{
      //console.log(response.data)
      setListePays(response.data)
     setIsloading(true)

    })
    .catch(error=>{
      console.log(error)
    })
  },[])

  return (
    <>
    <BrowserRouter>
        <Navbar listePays={listePays}/>
        {
          isloading ? 
          <Routes>
            <Route path="/" element={<Corps key="A" listePaysProps={listePays} listeColorRegions={colorRegions}/>}/>
            <Route path="/region/:region" element={<Corps key="B" listePaysProps={listePays} listeColorRegions={colorRegions}/>}/> 
            <Route path="/pays/:nomPays" element={<Pays/>}/>
            <Route path="/payscode/:codepays" element={<Payscode/>}/>
            <Route path="/Swiper/:region" element={<Swiper listePaysProps={listePays} />}/>
          </Routes>
          :
          <MDBSpinner role='status'>
            <span className='visually-hidden'>Loading...</span>
          </MDBSpinner>
        }
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App