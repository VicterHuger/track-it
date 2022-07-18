import axios  from "axios";
import {Link,useNavigate} from "react-router-dom";
import { useState, useEffect,useCallback } from "react";
import styled from "styled-components";
import UserConfigStyle from "./UserConfigStyle";
import Forms from "./Forms";
import displayErrorMessage from "./DisplayErrorMessage";


export default function LoginScreen({formData, setFormData, isDisabled, handleForm, setIsDisabled, CleanInputs, setUserData}){
    
    const navigate=useNavigate();
    const [errorMessage,setErrorMessage]=useState(null);

    const verifyLog=useCallback(()=>{
        
        const itemStorage=localStorage.getItem("user");
        if(itemStorage!==null){
            setUserData(JSON.parse(itemStorage));
            navigate("/hoje");         
        }
    },[navigate,setUserData]);
    
    useEffect(()=>{
        verifyLog();
        window.scrollTo(1,0);
    },[verifyLog])
    

    function doLogin(e){
        e.preventDefault();
        setIsDisabled(true);
        
        const body={
            email: formData.email,
            password: formData.password,
        }

        const promise=axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body);

        promise.then(res=>{
            const userData={
                image:res.data.image,
                token:res.data.token
            };
            setUserData(userData);
            localStorage.setItem("user",JSON.stringify(userData));
            setErrorMessage(null);
            setIsDisabled(false);
            CleanInputs();
            navigate("/hoje");
        });

        promise.catch(error=>{
            setErrorMessage(error.response.data.message)
            CleanInputs();
        });

    }

   

    const renderErrorMessage=displayErrorMessage(errorMessage);

    return(
        <UserConfigStyle>
            <Forms formData={formData} setFormData={setFormData} submitFunction={doLogin} isDisabled={isDisabled} handleForm={handleForm}/>
            {renderErrorMessage}
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


