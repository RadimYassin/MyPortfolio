
import React, { useState } from 'react'
import { TbMenu } from 'react-icons/tb'
import  {IoMdClose} from "react-icons/io"
import { IconContext } from 'react-icons/lib'
import { 
  Nav, NavContainer, NavLogo, MobileIcon,NavItem,Navlinks,NavMenu

} from './style'
import "../styleScss/Style.css"
 const MenuLinks=[
    {
        id:1,
        link:"/project",
        name:"project"
    },
    {
        id:2,
        link:"/about",
        name:"about"
    },
   
    {
        id:3,
        link:"/Contact",
        name:"Contact"
    },

 ]
function Navbar({click,setClick}) {


  const handelClick=()=>setClick(!click);
  return (
    <IconContext.Provider value={{color:'#3C99DC'}}>
      <Nav>
        <NavContainer>
          <NavLogo whileHover={{scale:1.1}} initial={{scale:1}} href='/home'>
           
            RY.
          </NavLogo>
          <MobileIcon onClick={handelClick}>{click ?  <IoMdClose/>:<TbMenu />}</MobileIcon>

           <NavMenu  onClick={handelClick} click={click} >

            {
                MenuLinks.map((i)=>
                    <NavItem key={i.id}>
                    <Navlinks to={i.link}>{i.name}</Navlinks>
                    </NavItem>
                )
            }
        
           
          
          
           </NavMenu>
           
        </NavContainer>
      </Nav>
    </IconContext.Provider>
  )
}

export default Navbar
