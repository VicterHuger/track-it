import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import GlobalStyle from "./../Styles/globalStyles";
import LoginScreen from "./LoginScreen";
import SignUp from "./SignUp";

export default function App(){

    const navigate=useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        image: '',
        password: ''
      });
    const [isDisabled,setIsDisabled]=useState(false);

   

    function handleForm(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          }); 
    }

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

    function CleanInputs(){
        setIsDisabled(false);
        
        setFormData({
            ...formData,
            name: '',
            email: '',
            image: '',
            password: ''
        });
    }
    
    function FailedRequest(error){
        alert(`${error.response.data.details.join(" ")}`);
        CleanInputs();
    }

    function doSignUp(e){    
        e.preventDefault();
        setIsDisabled(true);
        console.log(formData);  

        if(!isImgLink(formData.image)){
            CleanInputs();
            return alert("Insira um link de uma imagem válida!");
        }
        
        const promise=axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",{image:formData.image});

        promise.then((res)=>{
            alert("Cadastrado com sucesso!");
            CleanInputs();
            navigate("/");

        });

        promise.catch(error=>FailedRequest(error));
    }

    function isImgLink(url){
        if(typeof(url) !== 'string') return false;
           return(url.match(/^http[^?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) != null);
    }

    return (
        <>
            <GlobalStyle/> 
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginScreen formData={formData} setFormData={setFormData} doSignUp={doSignUp} doLogin={doLogin} isDisabled={isDisabled}handleForm={handleForm} />}/>
                        <Route path="/cadastro" element={<SignUp formData={formData} setFormData={setFormData} doLogin={doLogin} doSignUp={doSignUp} isDisabled={isDisabled}handleForm={handleForm} />}/>
                    </Routes>
                </BrowserRouter>
        </>
    )
}