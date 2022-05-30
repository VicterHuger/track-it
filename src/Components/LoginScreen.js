import axios  from "axios";
import {Link,useNavigate} from "react-router-dom";
import styled from "styled-components";
import UserConfigStyle from "./UserConfigStyle";
import Forms from "./Forms";


export default function LoginScreen({formData, setFormData, isDisabled, handleForm, setIsDisabled, CleanInputs, FailedRequest, setLoginResponse}){
    
    window.scrollTo(1,0);

    const navigate=useNavigate();

    function doLogin(e){
        e.preventDefault();
        setIsDisabled(true);
        
        const body={
            email: formData.email,
            password: formData.password,
        }

        const promise=axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body);

        promise.then(res=>{
            setLoginResponse(res.data);
            setIsDisabled(false);
            CleanInputs();
            navigate("/hoje");
        });

        promise.catch(error=>FailedRequest(error));

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





