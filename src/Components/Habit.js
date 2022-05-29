import styled from "styled-components";
import DayButton from "./DayButton";


export default function Habit({days,children, habitName,setHabitName,selected}){
    const arrayDays=["D","S","T","Q","Q","S","S"];
    return (
        <Content>
            {children}
            <WeekDays>
                {selected.map((value,index)=>{
                    return(<DayButton key={index} selected={value}>
                            {arrayDays[index]}
                            </DayButton>)
                })}
            </WeekDays>
        </Content>        
    );
}

const Content=styled.div`
background-color:#FFFFFF;
width:100%;
padding:13px 4%;
margin-bottom:10px;
display:flex;
flex-direction:column;
position: relative;
h3{
    font-size:20px;
    color:#666666;
    margin-bottom:8px;
}
ion-icon{
    font-size:14px;
    color:#666666;
    position: absolute;
    top:10px;
    left:10px;
}
input{
    width:100%;
    height:45px;
    padding:11px 4%;
    margin-bottom:20px;
    border:1px solid #D4D4D4;
    border-radius:5px;

}
input::placeholder{
    font-size:20px;
    color:#DBDBDB;
}
button{
    display:flex;
    justify-content:center;
    align-items:center;
}
&>button:nth-child(2){
    height:35px;
    width:28%;
    font-size:16px;
    color:#52B6FF;
    border:none;
    position:absolute;
    bottom:15px;
    right:46%;
    background-color:#FFFFFF;
}
&>button:nth-child(3){
    height:35px;
    width:28%;
    font-size:16px;
    background-color:#52B6FF;
    color:#FFFFFF;
    border:none;
    position:absolute;
    bottom:15px;
    right:5%;
    border-radius:5px;
}
`;

const WeekDays=styled.div`
display:flex;

`;