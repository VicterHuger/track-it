import styled from "styled-components";
import Header from "./Header";
import Navbar from "./Navbar";
export default function HistoryScreen(){
    window.scrollTo(1,0);
    return (
        <>
            <Header/>
            <Content>
                <h3>Histórico</h3>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Content>
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
        margin-bottom:18px;
    }
    &>p{
        color:#666666;
        font-size:18px;
    }
`;