import styled from "styled-components";
import { useContext } from "react";

import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function Header(){
    
    const {userData,setUserData}=useContext(UserContext);
    const navigate=useNavigate();

    function cleanLocalStorage(){
        localStorage.removeItem('user');
        setUserData(null);
        navigate('/');
    }

    return(
    <Container>
        <h1>TrackIt</h1>
        <div>
            <img src={userData.image} alt="Foto do usuário no formato circular" />
            <ion-icon name="log-out-outline" onClick={cleanLocalStorage}></ion-icon>
        </div>
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
div{
    display:flex;
    width:100px;
    justify-content:space-between;
    align-items:center;
    >img{
    aspect-ratio:1;
    height:51px;
    border-radius:50%;  
    }
    >ion-icon{
        font-size:40px;
        color:#FFFFFF;
        cursor: pointer;
    }
}
`