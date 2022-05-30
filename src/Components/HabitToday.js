import { useEffect,useState,useContext} from "react";
import axios from "axios";
import styled from "styled-components";

import UserContext from "../Contexts/UserContext";

export default function HabitToday({habit,id, RenderTodayHabits}){
    const [isHighScore,setIsHighScore]=useState(false);
    const {loginResponse}=useContext(UserContext);
    
    useEffect(()=>{
        if(habit.currentSequence===habit.highestSequence){
            setIsHighScore(true);
        }
    },[isHighScore]);

    function handleClick(id){
        const config={
            headers:{
                Authorization:`Bearer ${loginResponse.token}`
            }
        };

        if(habit.done){
            
            const promise=axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,null,config);

            promise.then(()=>{
                return RenderTodayHabits();
            });

            promise.catch(err=>alert(err.response.data.message));

        }else{
            const promise=axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,null,config);

            promise.then(()=>{
                return RenderTodayHabits();
            });

            promise.catch(err=>alert(err.response.data.message));

        }
    }

    return(
        <BackgroundContent>
            <HabitsContent>
                <h3>{habit.name}</h3>
                <div>
                    <TextGoal>Sequência atual: <TextStreak done={habit.done}>{`${habit.currentSequence} dias`}</TextStreak> </TextGoal>
                    <TextGoal>Seu recorde: <TextHighStreak isHighScore={isHighScore}>{`${habit.highestSequence} dias`}</TextHighStreak> </TextGoal>        
                </div>
            </HabitsContent>
            <Icon onClick={()=>handleClick(id)} done={habit.done}>
                <ion-icon name="checkmark-outline"></ion-icon>
            </Icon>
        </BackgroundContent>
    )
}

const BackgroundContent=styled.div`
background-color:#FFFFFF;
width:100%;
padding:13px 4%;
margin-bottom:10px;
display:flex;
justify-content:space-between;
align-items:center;
`;

const Icon=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:${props=>props.done?"#8FC549":"#EBEBEB"}; 
    border:${props=>props.done? "none" : "1px solid #E7E7E7"};
    border-radius:5px;
    aspect-ratio:1;
    width:20%;

    ion-icon{
        font-size:69px;
        color:#ffffff;
        &:hover{
            cursor:pointer;
            filter:brightness(1.15);
            transform: translateY(-2px);
        }
    }
    
`;

const HabitsContent=styled.div`
    h3{
        font-size:20px ;
        color:#666666 ;
        margin-bottom:8px;
    }
    &>div{
        
        display:flex;
        flex-direction:column;
    }
`;

const TextGoal=styled.h5`
    font-size:13px;
    color:#666666;
    margin-bottom:5px;
`;

const TextStreak=styled.span`
    font-size:13px;
    color:${props=>props.done?"#8FC549":"#666666"};
`;
const TextHighStreak=styled.span`
    font-size:13px;
    color:${props=>props.isHighScore?"#8FC549":"#666666"};
`