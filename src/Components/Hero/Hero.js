import React from 'react'
import styled from 'styled-components'
import { Container } from '../../GloblesStyles'
import {Info ,Title,Hi,Paraghraphe,Des,Button} from  './Style'

export default function () {
  return (
   <ContainerHero>



       <Info  >
        <Title> 
                <Hi>Hi, my name is</Hi>
              <Paraghraphe><span style={{color:'#3C99DC'}} > Yassine Radim.  </span> </Paraghraphe>
            
               <Paraghraphe>I build things for the web.</Paraghraphe>
               <Des>I am a front-end developer passionate about creating visually appealing and user-friendly web applications using HTML, CSS, JavaScript, React, and redux</Des>
               <Button  className='button'>resume</Button>
          
        </Title>
       </Info>
      
   </ContainerHero>
  )
}



const ContainerHero=styled.div`
height:90vh;
display:flex;
justify-content:center;
align-items:center;
@media screen and (max-width:960px){
  margin-top:90px;
  justify-content:space-around;
align-items:stretch;
    }
`