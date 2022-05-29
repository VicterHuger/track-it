import styled from "styled-components";
import Header from "./Header";

import Navbar from "./Navbar";

export default function TodayScreen(){
    window.scrollTo(1,0);
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
`;
