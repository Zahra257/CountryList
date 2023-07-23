import React from 'react'
import { Outlet } from 'react-router-dom'

 const About = () => {
  return (
    <>
    <h1>About</h1>
    <hr/>
    <Outlet/>
    </>
  )
}
export default About