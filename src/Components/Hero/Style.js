import styled from 'styled-components'

import {motion} from 'framer-motion'
export const Info=styled(motion.div)`
       width:80%;
       margin:0 auto;


`

export const Title=styled.h1`

  display:flex;
  flex-direction:column;
  gap:7px;

`
export const Hi=styled.h1`
     font-size:1rem;
`





export const Paraghraphe=styled.p`
color:#8892b0;

  font-size:5vw;
  @media screen and (max-width:960px){
    font-size:6.5vw;
    }

`


export const Des=styled.p`
font-size:16px;
line-height:normal;
color:#585a5d;
width:70%;
@media screen and (max-width:960px){
     width:100%;
    }
`