import { useState,useEffect } from "react";
import styled from "styled-components";
import dayjs from "dayjs";

import Header from "./Header";
import Navbar from "./Navbar";

export default function TodayScreen(){

    window.scrollTo(1,0);
    dayjs().locale('pt-br');

    const[title,setTitle]=useState(dayjs().locale('pt-br').format('dddd, DD/MM'));
    const[percentage,setPercentage]=useState(0);

    
    useEffect(()=>{
        let text=title[0].toUpperCase();
        for(let i=1;i<title.length;i++){
            text+=title[i];
        }
        setTitle(text);
    },[title]);
    

    
    console.log(title);
    
    return(
        <>
            <Header/>
            <Content>
                <h3>{title}</h3>
            </Content>
            <Navbar/>
        </>
    )
}

const Content=styled.div`
    margin:98px 0;
    width:100%;
    padding:0 5%;
    h3{
        color:#126BA5;
        font-size:23px;
    }
`
;
