
import styled from "styled-components";
import DayBlock from "./DayBlock";
import DayButton from "./DayButton";


export default function Habit({children,selectedNewHabit,ChangeColor,isDisabled,isNewHabit,selected}){
    const arrayDays=["D","S","T","Q","Q","S","S"];
  
    
    function RenderHabit(){
        if(isNewHabit){ 
            return selectedNewHabit.map((value,index)=>{
            return(
                <DayButton
                    isDisabled={isDisabled} 
                    ChangeColor={ChangeColor}
                     index={index}
                    key={index} 
                    selected={value}>
                         {arrayDays[index]}
                </DayButton>)
                    });
        }else{
            if(selected===undefined){
                return;
            }
            return selected.map((value,index)=>{
                return(
                    <DayBlock key={index} selected={value}>
                        {arrayDays[index]}
                    </DayBlock>
                )
            });                
        }
    }

    const displayDays=RenderHabit();

    return (
        <Content >
            {children}
            <WeekDays >
                {displayDays}
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
    font-size:15px;
    color:#666666;
    position: absolute;
    top:10px;
    right:10px;
}
ion-icon:hover{
    cursor:pointer;
    filter:brightness(1.15);
    transform: translateY(-2px);
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