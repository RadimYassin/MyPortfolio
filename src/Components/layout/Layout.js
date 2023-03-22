import React ,{useState} from 'react'
import styled from 'styled-components'
import { Container } from '../../GloblesStyles'
import Navbar from '../Navbar/Navbar'
import Socialmedia from '../So/Social-media'
function Layout({children}) {
    const [click,setClick]=useState(false)
  return (
    <div>
        <Navbar click={click} setClick={setClick} />

        <ConatinerLayout>
        {
            children
        }
        <Socialmedia/>
        </ConatinerLayout>
       
    </div>
  )
}

export default Layout




// style


const ConatinerLayout=styled(Container)`
 
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;

${Container}

`
