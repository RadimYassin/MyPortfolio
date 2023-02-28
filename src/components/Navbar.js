import React from 'react'
import LinkC from './LinkC'
import RegularList from '../RegularList'
import "../styles/Navbar/Navbar.css"
const Links=[
    {
        id:1,
        name:"Home",
        link:"/"
    },
    {
        id:2,
        name:"About",
        link:"/About"
    },
    {
        id:3,
        name:"Projects",
        link:"/Projects"
    },

]
export default function Navbar() {
  return (
   <div className='container'>
      <div className='navbar'>
        <RegularList resourceName="link" items={Links} ItemC={LinkC} /> 
       </div>
   </div>
  )
}
