import styled from 'styled-components'

import {motion} from 'framer-motion'
export const Info=styled(motion.div)`
       width:90%;
       margin:0 auto;


`

export const Title=styled.div`

  display:flex;
  flex-direction:column;
  gap:7px;

`
export const Hi=styled.h1`
     font-size:1.2rem;
`





export const Paraghraphe=styled.p`
color:#8892b0;

  font-size:5vw;
  @media screen and (max-width:960px){
    font-size:6.5vw;
    }

`


export const Des=styled.p`
font-size:18px;
line-height:normal;
color:#585a5d;
width:70%;
@media screen and (max-width:960px){
     width:100%;
    }
`

export const Button=styled.button`
  appearance: none;
  background-color: transparent;
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #3B3B3B;
  cursor: pointer;

  font-size: 16px;
  font-weight: 600;
  line-height: normal;
padding:12px;
  width: 400px;
margin-top:3vw;

  &:hover{
  color: #fff;
  background-color: red;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}



@media screen and (max-width:960px){
     width:50%;
     padding:6px;
    }

`

