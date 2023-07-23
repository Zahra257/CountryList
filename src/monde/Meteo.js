import React , {useEffect, useState}from 'react'
import axios from 'axios'

function Meteo(infoPays) {
    console.log(infoPays.infoPays[0].capital[0])
    console.log(infoPays)
    const[data, setData]=useState(undefined)
    const[loading, setLoading]=useState('')
    useEffect(()=>{
        axios.get(`http://api.weatherapi.com/v1/current.json?key=c37fd6cce9884a80a7c232036231907&q=${infoPays.infoPays[0].capital[0]}&aqi=no`)
        .then(response=>{
            console.log('data', response.data)
            setData(response.data)
            setLoading(true)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])
    
  return (
    <div>
        Meteo 

    {
        data  ? 
        <>
        <h4>{data.current.condition.text} </h4>
        <h4>{data.current.temp_c} C°</h4>

        <img src={data.current.condition.icon}/>
        </>
        
        : <h1>loading ....</h1>
    }
 </div> )
}

export default Meteo