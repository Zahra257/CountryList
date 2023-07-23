import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,NavLink } from 'react-router-dom'
import GoogleMapReact from 'google-map-react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBSpinner,
  MDBIcon
} from 'mdb-react-ui-kit';
import Meteo from './Meteo';


const Marker = () => <MDBIcon className='fs-1 text-danger' fas icon="map-marker-alt" />;

function Pays({namePaysProps}) {
  let {nomPays}=useParams()
  nomPays=nomPays ? nomPays : namePaysProps
    
    const [infoPays,setInfoPays]=useState([])
    const [isloading, setIsloading]=useState(false)

    useEffect(()=>{
        axios.get(`https://restcountries.com/v3.1/name/${nomPays}`)
        .then(response=>{
            console.log(response.data)
            setInfoPays(response.data)
            setIsloading(true)
        })
        .catch(error=>{
            console.log(error)
        })
    },[nomPays])

  return (
    <>
    <h1 className='text-center'> <NavLink to="/">Liste des pays du monde</NavLink></h1>
    {
      isloading ?
     infoPays.map(info=>
        <MDBCard className='mb-3 w-50 mx-auto mt-5' key={info.name.common}>
          <div style={{ height: '50vh', width: '100%' }} className="postion-relative">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyA8yin2m5utSLVbgSYNZ_pcopSbP4Xvu2U" }}
              defaultCenter={{lat:info.capitalInfo.latlng[0],lng:info.capitalInfo.latlng[1]}}
              defaultZoom={11}
            >
              <Marker
                lat={info.capitalInfo.latlng[0]}
                lng={info.capitalInfo.latlng[1]}
              />
            </GoogleMapReact>
            <MDBCardImage position='top' className='position-absolute start-0 top-0 rounded-circle' 
            style={{ width: '45px', height: '45px' }} src={info.flags.png} alt={info.flags.alt} />
          </div>

        
        <MDBCardBody > 
          <div class='row'>
          <div class='col'>
          <MDBCardTitle>{info.name.common}- {info.capital}</MDBCardTitle>
          <MDBCardText>
           {info.altSpellings[1]}
          </MDBCardText>
         
          <h6>Langues :</h6>
          <ul>
          { 
            Object.values(info.languages).map(lng=>
              <li key={lng}>
                {lng}
              </li>
              )
          }
          </ul>
          <h6>Frontiéres :</h6>
          <ul>
          {
           info?.borders?.map(codepays=>
              <li key={codepays}>
                <NavLink to={`/payscode/${codepays}`}>{codepays}</NavLink>
              </li>
              )
          }
          </ul>
          </div>
          <div class='col'>
          <Meteo infoPays={infoPays}/>
          </div>
          </div>
          <MDBCardText>
            <small className='text-muted'>{info.area} Km</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      )
      :
      <MDBSpinner role='status'>
            <span className='visually-hidden'>Loading...</span>
          </MDBSpinner>
}
      </>
  )
}

export default Pays




/*

AIzaSyA8yin2m5utSLVbgSYNZ_pcopSbP4Xvu2U
c37fd6cce9884a80a7c232036231907 
http://api.weatherapi.com/v1/current.json?key=c37fd6cce9884a80a7c232036231907&q=London&aqi=no

*/
