import React, { useEffect,useState } from 'react'
import { MDBSpinner } from 'mdb-react-ui-kit';
import  Post  from './Post'
import axios from 'axios';
const Body = () => {
  const [nom,setNom]=useState("ahmed")
  const [users,setUsers]=useState([])
  const [isloading,setLoadning]=useState(false)

useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response=>{
    console.log(response.data);
    setUsers(response.data)
    setLoadning(true)
  }
    )
  .catch(error=>{console.log(error)})
},[nom])

  const changerValue=(event)=>{
    setNom(event.target.value)
  }
  return (
    <>
    <h1>Je suis le Corps</h1>
    <h2>le nom est :{nom}</h2>
    <Post color='red' text={nom} />
    <Post color='green' text='Text 2'/>
    <Post color='blue' text='Text 3'/>
    <Post color='yellow' text='Text xxxxxxxxxx'/>
    <input type="text" value={nom} onChange={(event)=>{changerValue(event)}}/>
    <hr/>
    <h2>Data Users:</h2>
    {
    isloading ? 
    <ul>
    {
      users.map(user=>
        <li key={user.id}>{user.name}</li>
        )
    }
    </ul>
    :
    <MDBSpinner role='status'>
      <span className='visually-hidden'>Loading...</span>
    </MDBSpinner>
    }
    </>
  )
}
export default Body