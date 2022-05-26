import {Link} from "react-router-dom";
import styled from "styled-components";
import UserConfigStyle from "./UserConfigStyle";
import Forms from "./Forms";
import Input from "../Styles/Input";

export default function SignUp({formData, setFormData, doLogin, doSignUp, isDisabled,handleForm}){
   
    
    return(
        <UserConfigStyle>
            <Forms isSignUp={true} formData={formData} setFormData={setFormData} doLogin={doLogin} doSignUp={doSignUp} isDisabled={isDisabled} handleForm={handleForm}>
                <Input type="text" name="name" onChange={handleForm} placeholder="nome" value={formData.name} disabled={isDisabled} isDisabled={isDisabled} required/>
                <Input type="url" name="image" placeholder="foto" onChange={handleForm} value={formData.image} disabled={isDisabled} isDisabled={isDisabled} required/>
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