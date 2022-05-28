import styled from "styled-components";
import { useContext } from "react";

import UserContext from "../Contexts/UserContext";

export default function Header(){
    
    const {loginResponse}=useContext(UserContext);
    return(
    <Container>
        <h1>TrackIt</h1>
        <img src={loginResponse.image} alt="Foto do usuário no formato circular" />
    </Container>
    )
}

const Container=styled.header`
display:flex;
justify-content:space-between;
align-items:center;
height:70px;
width:100%;
position:fixed;
top:0;
left:0;
background-color:#126BA5;
box-shadow:0px 4px 4px 0px rgba(0,0,0,0.15);
padding:0 5%;
h1{
    font-size:40px;
    color:#FFFFFF;
    font-family: 'Playball', cursive;
}
img{
    aspect-ratio:1;
    height:51px;
    border-radius:50%;
}
`