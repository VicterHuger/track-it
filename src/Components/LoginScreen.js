import {Link} from "react-router-dom";
import styled from "styled-components";
import UserConfigStyle from "./UserConfigStyle";
import Forms from "./Forms";


export default function LoginScreen({formData, setFormData, isDisabled, handleForm, setIsDisabled}){

    function doLogin(e){
        e.preventDefault();
        setIsDisabled(true);
        console.log(formData);
        setFormData({
            ...formData,
            email: "",
            password: "",
          }); 

        alert("login okay");
        
        //promise.catch(error=>FailedRequest(error));
    }

    return(
        <UserConfigStyle>
            <Forms formData={formData} setFormData={setFormData} submitFunction={doLogin} isDisabled={isDisabled} handleForm={handleForm}/>
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





