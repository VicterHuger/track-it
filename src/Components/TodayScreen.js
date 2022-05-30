import { useState,useEffect,useContext } from "react";
import styled from "styled-components";
import dayjs from "dayjs";

import DayProgessContext from "../Contexts/DayProgessContext";
import UserContext from "../Contexts/UserContext";
import Header from "./Header";
import Navbar from "./Navbar";
import axios from "axios";
import HabitToday from "./HabitToday";

export default function TodayScreen(){

    window.scrollTo(1,0);

    require('dayjs/locale/pt-br');

    dayjs().locale('pt-br');

    const {progress}=useContext(DayProgessContext);
    const {loginResponse}=useContext(UserContext);

    const[title,setTitle]=useState(dayjs().locale('pt-br').format('dddd, DD/MM'));
    const [habits,setHabits]=useState([]);

    useEffect(()=>{
        let text=title[0].toUpperCase();
        for(let i=1;i<title.length;i++){
            text+=title[i];
        }
        setTitle(text);
        
    },[title]);
    
    useEffect(()=>{
        RenderTodayHabits()
    },[]);
    
    function RenderTodayHabits(){
        const config={
            headers:{
                Authorization:`Bearer ${loginResponse.token}`
            }
        };
        const promise=axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",config);

        promise.then(res=>{
            console.log(res.data);
            setHabits([...res.data]);
            const numberOfSelected=res.data.filter(habit=>habit.done===true).length;
            progress.setPercentage(Math.round(numberOfSelected*100/(res.data.length)));
        });
        promise.catch(err=>alert(err.response.data.message));
    }
    return(
        <>
            <Header/>
            <Content>
                <h3>{title}</h3>
                <SubTitle percentage={progress.percentage}>
                    {progress.percentage ===0 ? "Nenhum hábito concluído ainda" : `${progress.percentage}% dos hábitos concluídos`}
                </SubTitle>
                {habits.map((habit,index)=>{
                    return (<HabitToday key={index} RenderTodayHabits={RenderTodayHabits} habit={habit} id={habit.id}/>);
                })}
            </Content>
            <Navbar/>
        </>
    )
}

const Content=styled.div`
    margin:98px 0;
    width:100%;
    padding:0 5%;
    &>h3{
        color:#126BA5;
        font-size:23px;
    }
`;
const SubTitle=styled.h4`
    font-size:18px;
    margin:10px 0 28px;
    color:${props=>props.percentage===0 ? "#BABABA" : "#8FC549"};
`;

