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
margin-left:auto;
margin-right:auto;
padding-left:40px;
padding-right:40px;
margin-top :${({mt})=>mt ? mt : 0};

@media screen and (max-width:991px) {
    padding-left:50px;
padding-right:30px;
}



`

