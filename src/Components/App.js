import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";
// import axios from "axios";

import GlobalStyle from "./../Styles/globalStyles";
import LoginScreen from "./LoginScreen";
import SignUp from "./SignUp";

export default function App(){


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
        alert(`${error.response.data.message}`);
        CleanInputs();
    }

    return (
        <>
            <GlobalStyle/> 
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginScreen formData={formData} setFormData={setFormData} isDisabled={isDisabled} setIsDisabled={setIsDisabled} handleForm={handleForm} CleanInputs={CleanInputs} FailedRequest={FailedRequest} />}/>
                        <Route path="/cadastro" element={<SignUp formData={formData} setFormData={setFormData} setIsDisabled={setIsDisabled} isDisabled={isDisabled}handleForm={handleForm} CleanInputs={CleanInputs} FailedRequest={FailedRequest} />}/>
                    </Routes>
                </BrowserRouter>
        </>
    )
}