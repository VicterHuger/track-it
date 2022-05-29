import styled from "styled-components";

export default function Habits({children}){
    return (
        <Content>
            {children}
            <p> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>  
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
