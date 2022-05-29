import {Link,useNavigate} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import UserConfigStyle from "./UserConfigStyle";
import Forms from "./Forms";
import Input from "../Styles/Input";

export default function SignUp({formData, setFormData, isDisabled, setIsDisabled, handleForm, CleanInputs, FailedRequest}){
    window.scrollTo(1,0);

    const navigate=useNavigate();


    function doSignUp(e){    
        e.preventDefault();
        setIsDisabled(true);

        if(!isImgLink(formData.image)){
            CleanInputs();
            return alert("Insira um link de uma imagem válida!");
        }

        const body={
            email: formData.email,
	        name: formData.name,
	        image: formData.image,
	        password: formData.password,
        };  
        
        const promise=axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",body);

        promise.then((res)=>{
            alert("Cadastrado com sucesso!");
            setIsDisabled(false);
            CleanInputs();
            navigate("/");
        });

        promise.catch(error=>FailedRequest(error));
    }

    function isImgLink(url){
        if(typeof(url) !== 'string') return false;
           return(url.match(/^http[^?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) != null);
    }
    
    return(
        <UserConfigStyle>
            <Forms formData={formData} setFormData={setFormData} submitFunction={doSignUp} isDisabled={isDisabled} handleForm={handleForm}>
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