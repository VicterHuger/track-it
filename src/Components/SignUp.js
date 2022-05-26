import {Link} from "react-router-dom";
import styled from "styled-components";
import UserConfigStyle from "./UserConfigStyle";
import Forms from "./Forms";

export default function SignUp({email, setEmail, password, setPassword, doLogin, doSignUp, name,setName, image, setImage}){
   
    
    return(
        <UserConfigStyle>
            <Forms isSignUp={true} email={email} setEmail={setEmail} password={password} setPassword={setPassword} doLogin={doLogin} doSignUp={doSignUp}>
            <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="nome" value={name} required/>
            <input type="url" placeholder="foto" onChange={(e)=>setImage(e.target.value)} value={image} required/>
            </Forms>
            <Link to="/">
                <SignUpLink>Já tem uma conta? Faça login!</SignUpLink>
            </Link>
        </UserConfigStyle>
        
    );
}

const SignUpLink=styled.h4`
    text-decoration:underline;
    color:#52B6FF;
    font-size:14px;

`;