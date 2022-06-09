import { useState,useEffect,useContext, useCallback} from "react";
import {RotatingLines} from "react-loader-spinner";
import styled from "styled-components";
import dayjs from "dayjs";

import DayProgessContext from "../contexts/DayProgessContext";
import UserContext from "../contexts/UserContext";
import Header from "./Header";
import Navbar from "./Navbar";
import axios from "axios";
import HabitToday from "./HabitToday";
import Loading from "../assets/styles/Loading";


export default function TodayScreen(){
    

    window.scrollTo(1,0);
    
    require('dayjs/locale/pt-br');

    dayjs().locale('pt-br');

    const {progress}=useContext(DayProgessContext);
    const {userData}=useContext(UserContext);

    const[title,setTitle]=useState(dayjs().locale('pt-br').format('dddd, DD/MM'));
    const [habits,setHabits]=useState(null);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        let text=title[0].toUpperCase();
        for(let i=1;i<title.length;i++){
            text+=title[i];
        }
        setTitle(text);
        
    },[title]);

    const RenderTodayHabits=useCallback(()=>{
        const config={
            headers:{
                Authorization:`Bearer ${userData.token}`
            }
        };
        const promise=axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",config);

        promise.then(res=>{
            setLoading(false);
            setHabits([...res.data]);
            const numberOfSelected=res.data.filter(habit=>habit.done===true).length;
            progress.setPercentage(Math.round(numberOfSelected*100/(res.data.length)));
        });

        promise.catch(err=>{setLoading(false); return alert(err.response.data.message)});
    },[progress,userData.token]);
    
    useEffect(()=>{
        RenderTodayHabits()
    },[RenderTodayHabits,userData]);
    
    function TodayScreenContent(){
        if(habits===null){
            return (
                <Loading>
                    <RotatingLines 
                    width="200"
                    height="200"
                    strokeColor="#126BA5"
                    animationDuration="1"
                    />
                </Loading>
            )
        }else{
            return (
                <Content>
                    <h3>{title}</h3>
                    <SubTitle percentage={progress.percentage}>
                        {progress.percentage ===0 ? "Nenhum hábito concluído ainda" : `${progress.percentage}% dos hábitos concluídos`}
                    </SubTitle>
                    {loading ? 
                        <Loading>
                            <RotatingLines 
                                width="200"
                                height="200"
                                strokeColor="#126BA5"
                                animationDuration="1"
                            />
                        </Loading>
                        :
                        habits.map((habit,index)=>{
                        return (<HabitToday key={index} RenderTodayHabits={RenderTodayHabits} habit={habit} id={habit.id}  setLoading={setLoading}/>);
                    })}
                </Content>
            )
        }
    }

    const renderPageTodayScreen=TodayScreenContent();

    return(
        <>
            <Header/>
            {renderPageTodayScreen}
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

