import styled from "styled-components";
import Header from "./Header";

import Navbar from "./Navbar";

export default function TodayScreen(){
    return(
        <>
            <Header/>
            <Content/>
            <Navbar/>
        </>
    )
}

const Content=styled.div`
    margin:70px 0;
    width:100%;
    background-color:#F2F2F2; 
`;
