import {Link} from "react-router-dom";
import styled from "styled-components";
import UserConfigStyle from "./UserConfigStyle";
import Forms from "./Forms";


export default function LoginScreen({email,setEmail,password, setPassword, doLogin, doSignUp, isDisabled}){

    return(
        <UserConfigStyle>
            <Forms email={email} setEmail={setEmail} password={password} setPassword={setPassword} doLogin={doLogin} doSignUp={doSignUp} isSignUp={false} isDisabled={isDisabled}/>
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





