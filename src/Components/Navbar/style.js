import styled from 'styled-components'
import { Container } from '../../GloblesStyles'
import {TbMovie} from 'react-icons/tb'
import { Link } from 'react-router-dom'
 
 export const Nav=styled.nav`
    background-color:#fcfcfc;
    height:80px;

    display:flex;
    justify-content: center;
    align-items:center; 
    font-size: 1.2rem; 
    position: sticky;
    top:0;
    z-index:999;
`
export const NavContainer=styled(Container)`
 display:flex;
 justify-content:space-between;
 height:80px;
 ${Container}
`


export const NavLogo = styled(Link)`
    
    color :#2b79b6;

    cursor: pointer;
    text-decoration:none;
    font-size:2rem;
    display:flex;
    align-items:center;
    @media screen and (max-width:700px) {
        font-size:1.8rem;
    }

`
export const NavIcon = styled(TbMovie)`
 
margin-right:0.5rem;

`  
export const MobileIcon = styled.div`
    display:none;
   
    @media screen and (max-width:960px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform:translate(-100%,60%);
        font-size:1.8rem;
        cursor: pointer;
    }
`


export const NavMenu=styled.ul`
display:flex;
align-items:center;
list-style:none;
text-align:center;
gap:20px;
background-color:#fcfcfc;

@media screen and (max-width:960px){
      display:flex;
      flex-direction:column;
      width:100%;
      height:80vh;
      position:absolute;
      top:80px;
      left:${({click})=>(click ? 0:'-100%')};
      opacity:1;
      transition:all 0.5 ease;
      overflow:hidden;
  
    }

    
`;


export const NavItem=styled.li`
    height:80px;
   

    @media screen and (max-width:960px){
        width:100%;
        &:hover{
        border:none;
    }
    }
`

export const Navlinks=styled(Link)`
     color:black;
    display:flex;
    align-items:center;
    text-decoration:none;

    height:100%;
    position:relative;
    &:before {
		content: "";
		position: absolute;
		width: 100%;
		height: 2px;
		bottom: 0;
		margin: -5px 0;
		background-color: red;
		visibility: hidden;
		transform: scaleX(0);
		transition: all 0.4s ease-in-out 0s;
	}
	&:hover:before {
		visibility: visible;
		transform: scaleX(1);
	}


    @media screen and (max-width:960px){
        position:absolute;
      text-align:center;
      padding:2rem;
      width:100%;
      display:table;
      &:hover{
        
        transition:all 0.3s ease;
      }
    }
`