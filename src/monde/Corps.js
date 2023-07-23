import React, { useState } from 'react'
import { MDBBadge, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { useParams,NavLink } from 'react-router-dom';


function Corps({listePaysProps,listeColorRegions}) {
  
 const {region}=useParams()
  
  listePaysProps= region ? listePaysProps.filter(pays=>pays.region.toLowerCase()===region.toLowerCase()) : listePaysProps


  const [listePaysAffiche,setListePaysAffiche]=useState(listePaysProps)
  const [valSearchPays,setValSearchPays]=useState("")

  
  const searchPays=function(event){
    setValSearchPays(event.target.value)
    setListePaysAffiche(listePaysProps.filter(pays=>pays.name.common.toLowerCase().startsWith(event.target.value.toLowerCase())))
  } 
  return (
    <>
    <h1 className='text-center'> <NavLink to="/">Liste des pays du monde</NavLink></h1>
    <div className='w-25 mx-auto'>
       
    <input type="text" value={valSearchPays} onChange={(event)=>searchPays(event)}/>
    <hr/>

    <MDBListGroup style={{ minWidth: '22rem' }} light>
        {
          listePaysAffiche.map(pays=>
            
            <MDBListGroupItem key={pays.name.common} className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
              <NavLink to={`/pays/${pays.name.common}`}>
               <img
                src={pays?.flags.png}
                alt={pays?.flags.alt}
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
               </NavLink>
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{pays?.name.common}</p>
                <p className='text-muted mb-0'>{pays?.capital}</p>
              </div>
            </div>
            <MDBBadge pill light color={listeColorRegions.filter(elementregion=>elementregion.region===pays.region)[0].color}>
              
              <NavLink to={`/region/${pays.region}`}>{pays.region}</NavLink>
              
            </MDBBadge>
          </MDBListGroupItem>

            )
        }
     

    </MDBListGroup>
    </div>
    </>
  )
}

export default Corps