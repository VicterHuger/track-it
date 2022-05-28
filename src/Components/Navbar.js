
import { Link } from "react-router-dom";
import styled from "styled-components";

import ProgessBar from "./ProgessBar";

export default function Navbar(){
    return(
        <Menu>
            <Link to="/habitos"><h3>Hábitos</h3></Link>
            <Link to="/hoje"><ProgessBar/></Link>
            <Link to="/historico"><h3>Histórico</h3></Link>
        </Menu>
    )
}

const Menu= styled.nav`
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
position:fixed;
bottom:0;
left:0;
height:70px;
background-color:"ffffff";
padding: 0 8%;




h3{
    color:#52B6FF;
    font-size:18px;
}
`

