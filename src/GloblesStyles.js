import styled ,{createGlobalStyle} from "styled-components";


 const GlobleStyle=createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;

font-family: 'Poppins', sans-serif;
}




`
export default GlobleStyle
export const  Container=styled.div`


z-index:1;
width:100%;
max-width:1400px;
margin-left:auto;
margin-right:auto;
padding-left:40px;
padding-right:40px;
margin-top :${({mt})=>mt ? mt : 0};
@media screen and (max-width:991px) {
    padding-left:30px;
padding-right:30px;
}



`

export const Button = styled.button`
    border-radius:4px;
    background-color:${({primary})=>primary ? '#f7934b' :'#0467fb'};
    white-space: nowrap;
    padding:${({big})=>big? '12px 64px':'10px 20px'};
    color:#fff;
    font-size:${({fontBig})=>(fontBig ? '20px':'16px')};
    outline:none;
    border:none;
    cursor:pointer;
      &:hover{
     transition:all 0.3s ease-out;
     background-color:${({primary})=>primary ?'#0467fb' :'#4B59F7'};
      } 

      @media screen and (max-width:960px) {
        width:100%;

        
      }
`