import React from 'react'
import { Container } from '../../GloblesStyles'
import {Info ,Title,Hi,Paraghraphe,Des} from  './Style'

export default function () {
  return (
   <Container mt='7vw' >



       <Info  >
        <Title> 
                <Hi>Hi, my name is</Hi>
              <Paraghraphe><span style={{color:'#3C99DC'}} > Yassine Radim.  </span> </Paraghraphe>
            
               <Paraghraphe>I build things for the web.</Paraghraphe>
               <Des>I am a front-end developer passionate about creating visually appealing and user-friendly web applications using HTML, CSS, JavaScript, React, and redux</Des>
               <button  className='button'>resume</button>
          
        </Title>
       </Info>
      
   </Container>
  )
}
