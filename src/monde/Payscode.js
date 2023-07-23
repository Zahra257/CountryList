import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pays from "./Pays"

function Payscode() {
    const {codepays}=useParams()
    const [namePays,setNamePays]=useState(undefined)

    useEffect(()=>{
        axios.get(`https://restcountries.com/v3.1/alpha?codes=${codepays}&fields=name`)
        .then(response=>{
            setNamePays(response.data[0].name.common)
        })
        .catch(error=>{
            console.log(error)
        })
    },[codepays])
  return (
    <>
    {
        namePays ? 
        <Pays namePaysProps={namePays}/>
        :
        ""
    }
    </>
  )
}

export default Payscode