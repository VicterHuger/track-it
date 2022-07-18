import styled from "styled-components";

export default function Habits({children,length, addHabitClicked}){
    return (
        <Content >
            {children}
            {(length===0 && !addHabitClicked )?
            <p> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> : ""}  
        </Content>
      
    );
}

const Content=styled.div`


p{
    margin-top:19px;
    color:#666666;
    font-size:18px;
}
`;
