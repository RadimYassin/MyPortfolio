
import styled from 'styled-components';
import { Container } from '../../GloblesStyles'


export const ContainerSocial = styled.div`
 
  position: fixed;

  width:100%;
   height:200px;
   bottom:100px;
   z-index:9;
  display:flex;
  justify-content:space-between;
  align-items:center;
  @media screen and (max-width:991px) {
    position: relative;
}




`;
export const Media = styled.div`
   
   


`;



export const MediaE = styled.div`
   transform:rotate(90deg);
   
   
`;


export const MediaInfo = styled.div`
  transform:rotate(90deg);
     display:flex;
 
  
   position: relative;
   right:40px;
     &::before {
        content: " ";
        display: block;
        width: 100%;
        height: 5px;
      background-color:hsl(206,62%,44%);
      border-radius:10px;
      left: 210px;
        top:50%;
       
        
        position: absolute;
     
     
      }
      @media screen and (max-width:991px) {
        transform:rotate(0);
        &::before {
      
        display: none;}
   
}
  

`;

export const Email = styled.p`
font-family: sans-serif;

      transform:rotate(90deg);
      display:flex;
   

        position: relative;
        left: 70px;
        &::before {
        content: " ";
        display: block;
        width: 100%;
        height: 5px;
      background-color:hsl(206,62%,44%);
      border-radius:10px;
        left: 210px;
        top:50%;
        
        position: absolute;
     
     
      }
      @media screen and (max-width:991px) {
    position: relative;
    display:none;
}
        

`;


export const Item = styled.li`
    list-style:none;
    transform:rotate(0deg);
   
`;

export const ItemE = styled.span`
    width:10px;
    background-color:red;
    position:relative;

  
    
`;




