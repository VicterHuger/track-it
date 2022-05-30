import styled from "styled-components";
import DayButton from "./DayButton";


export default function Habit({children,selectedNewHabit,ChangeColor,isDisabled}){
    const arrayDays=["D","S","T","Q","Q","S","S"];
    
    return (
        <Content>
            {children}
            <WeekDays >
                {selectedNewHabit.map((value,index)=>{
                    return(<DayButton
                            isDisabled={isDisabled} 
                            ChangeColor={ChangeColor}
                            index={index}
                            key={index} 
                            selected={selectedNewHabit[index]}>
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
button{
    display:flex;
    justify-content:center;
    align-items:center;
}
`;

const WeekDays=styled.div`
display:flex;

`;