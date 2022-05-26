
import {Link} from "react-router-dom";
import styled from "styled-components";
import UserConfigStyle from "./UserConfigStyle";
import Forms from "./Forms";


export default function LoginScreen(){
    return(
        <UserConfigStyle>
            <Forms/>
            <Link to="/cadastro" >
                <SignUpLink>Não tem uma conta? Cadastre-se!</SignUpLink>
            </Link>
        </UserConfigStyle>
        
    );
}

const SignUpLink=styled.h4`
    text-decoration:underline;
    color:#52B6FF;
    font-size:14px;

`;





