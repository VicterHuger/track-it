import { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

import UserContext from "../Contexts/UserContext";
import Header from "./Header";
import Navbar from "./Navbar";
import Habits from "./Habits";
import Habit from "./Habit";
import InputNewHabit from "./InputNewHabit";
import ButtonSave from "./ButtonSave";
import ButtonCancel from "./ButtonCancel";

export default function HabitsScreen(){
    window.scrollTo(1,0);

    const {loginResponse}=useContext(UserContext);
    const initialSelected=[false,false,false,false,false,false,false]
    const [habits,setHabits]=useState([]);
    const [habitName,setHabitName]=useState("");
    const [selected,setSelected]=useState([]);
    const [selectedNewHabit,setSelectedNewHabit]=useState([false,false,false,false,false,false,false]);
    const [isDisabledNewHabit,setIsDisabledNewHabit]=useState(false);
    const [isDisabled,setIsDisabled]=useState(false);
    const [newHabit,setNewHabit]=useState([]);

    useEffect(()=>{
        const config={
            headers:{
                Authorization:`Bearer ${loginResponse.token}`
            }
        };
        const promise=axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);

        promise.then( (res)=>{
            if(res.data.length!==0){
                setHabits(...res.data);
                alert("sucesso na requisição");
            };
            alert("sucesso na requisição, mas não fez nada");
        });

        promise.catch( (err) => alert(err.response.data.message) );
    },[loginResponse.token]);


    function mapHabits(){
        if(habits.length!==0){
            habits.map((habit,i)=>{

                if(habit.days.length!==0){
                    const newSelected=[...selected,initialSelected];
                  return habit.days.forEach(value=>{
                    newSelected[i][value]=true;
                    setSelected(...newSelected)
                });
                }
                return setSelected(...selected);
            });

            return habits.map(habit=>
            <Habit habit={habit} key={habit.id} selected={selected} setSelected={setSelected}>
                <h3>{habit.name}</h3>
                <ion-icon name="trash-outline"></ion-icon>
            </Habit>);
        }
        return;
    };

    function buttonContent(){
        if(isDisabled){
            return (<ThreeDots heigth={11} width={43} radius={50} color="#FFFFFF" />);
        }else{
            return "Salvar";
        }
    }
    

    function displayNewHabit(){
        return newHabit.map((value,index)=>{
            return(
                <Habit key={index} habitName={habitName} setHabitName={setHabitName} ChangeColor={ChangeColor} selectedNewHabit={selectedNewHabit} isDisabled={isDisabled}>    
                    <InputNewHabit setHabitName={setHabitName} habitName={habitName} isDisabled={isDisabled}/>
                    <ButtonCancel isDisabled={isDisabled}>Cancelar</ButtonCancel>
                    <ButtonSave isDisabled={isDisabled} SaveHabit={SaveHabit} >{buttonContent()}</ButtonSave>
                </Habit>)}); 
    } 
        
    function ChangeColor(index){
        const newSelected=[...selectedNewHabit];
        newSelected[index]=!selectedNewHabit[index];
        return setSelectedNewHabit([...newSelected]);
    }
   
    function SaveHabit(){
        console.log("entrou");
        setIsDisabled(true);
        const days=[];
        selectedNewHabit.forEach((value,index)=>{
            if(value) return days.push(index);
        });
        const body={
            name:habitName,
            days
        };
        
    }
    
    const renderHabits=mapHabits();
    const renderNewHabit=displayNewHabit();
    

    return (
        <>
            <Header/>
            <Content>
              <TitleContent>
                <h2>Meus hábitos</h2>
                <button onClick={()=>{setNewHabit([...newHabit,""]);setIsDisabledNewHabit(true)}} disabled={isDisabledNewHabit}>+</button>
              </TitleContent>  
              <Habits>
                {renderNewHabit}
                {renderHabits}
              </Habits>
            </Content>
            <Navbar/>
        </>
    )
}
const Content=styled.main`
    margin:92px 0 70px;
    padding:0 5%;
    width:100%;
`;

const TitleContent=styled.div`
    display:flex;
    height:35px;
    width:100%;
    justify-content:space-between;
    align-items:center;
    margin-bottom:28px;
    h2{
        font-size:23px;
        color:#126BA5;
    }
    button{
        background-color:#52B6FF;
        color:#FFFFFF;
        height:100%;
        width:40px;
        font-size:27px;
        display:flex;
        justify-content:center;
        align-content:center;
        border:none;
        border-radius:5px;
        text-align:center;
    }
    button:hover{
        cursor:pointer;
        filter:brightness(1.15);
        transform: translateY(-2px);
    }
`