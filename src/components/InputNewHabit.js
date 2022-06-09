import styled from "styled-components";

export default function InputNewHabit({habitName,setHabitName,isDisabled}){
    return (
        <Input  isDisabled={isDisabled}
            type="text" 
            placeholder="nome do hábito"
            onChange={e=>setHabitName(e.target.value)}
            value={habitName}
            disabled={isDisabled}/>
    )
}

const Input=styled.input`
 width:100%;
    height:45px;
    padding:11px 4%;
    margin-bottom:20px;
    border:1px solid #D4D4D4;
    border-radius:5px;
    font-size:20px;
    background-color:${props=>props.isDisabled ? "#F2F2F2":"#FFFFFF"};
    &::placeholder{
        font-size:20px;
        color:${props=>props.isDisabled ? "#B3B3B3" : "#DBDBDB"};
        
    }
`;