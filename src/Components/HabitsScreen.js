import { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import UserContext from "../Contexts/UserContext";
import Header from "./Header";
import Navbar from "./Navbar";
import Habits from "./Habits";
import Habit from "./Habit";

export default function HabitsScreen(){
    window.scrollTo(1,0);

    const {loginResponse}=useContext(UserContext);

    const [habits,setHabits]=useState([]);
    const [habitName,setHabitName]=useState("");
    const [selected,setSelected]=useState([false,false,false,false,false,false,false]);
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
            habits.map(habit=>{
                if(habit.days.length!==0){
                  return habit.days.map(value=>setSelected(...selected, selected[value]=true))
                }
                return setSelected(...selected);
            });

            return habits.map(habit=>
            <Habit habit={habit} key={habit.id}>
                <h3>{habit.name}</h3>
                <ion-icon name="trash-outline"></ion-icon>
            </Habit>);
        }
        return;
    };

    function displayNewHabit(){
                
                return newHabit.map((value,index)=>{
                    return(<Habit key={index} habitName={habitName} setHabitName={setHabitName} selected={selected}>
                            
                        <input type="text" 
                            placeholder="nome do hábito"
                            onChange={e=>setHabitName(e.target.value)}
                            value={habitName} />
                        <button>Cancelar</button>
                        <button>Salvar</button>
                    </Habit>)}); 
            } 
        
                 
   
    
    
    const renderHabits=mapHabits();
    const renderNewHabit=displayNewHabit();
    

    return (
        <>
            <Header/>
            <Content>
              <TitleContent>
                <h2>Meus hábitos</h2>
                <button onClick={()=>{setNewHabit([...newHabit,""]);setIsDisabled(true)}} disabled={isDisabled}>+</button>
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