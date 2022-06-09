import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";

import DayProgessContext from "../contexts/DayProgessContext";
import UserContext from "../contexts/UserContext";
import LoginScreen from "./LoginScreen";
import SignUp from "./SignUp";
import TodayScreen from "./TodayScreen";
import HistoryScreen from "./HistoryScreen";
import HabitsScreen from "./HabitsScreen";
import GlobalStyle from "../assets/styles/globalStyles";


export default function App(){

    const[percentage,setPercentage]=useState(0);

    const progress={percentage,setPercentage};

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        image: '',
        password: ''
      });

    const [isDisabled,setIsDisabled]=useState(false);

    const[userData,setUserData]=useState({});

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
            password: '',
        
        });
    }

    function FailedRequest(error){
        alert(`${error.response.data.message}`);
        CleanInputs();
    }

    return (
        <>
            <GlobalStyle/> 
                <UserContext.Provider value={{userData}}>
                    <DayProgessContext.Provider value={{progress}}>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<LoginScreen formData={formData} setFormData={setFormData} isDisabled={isDisabled} setIsDisabled={setIsDisabled} handleForm={handleForm} CleanInputs={CleanInputs} FailedRequest={FailedRequest} setUserData={setUserData}/>}/>
                                <Route path="/cadastro" element={<SignUp formData={formData} setFormData={setFormData} setIsDisabled={setIsDisabled} isDisabled={isDisabled}handleForm={handleForm} CleanInputs={CleanInputs} FailedRequest={FailedRequest} />}/>
                                <Route path="/habitos" element={<HabitsScreen/>} />
                                <Route path="/historico" element={<HistoryScreen/>}/>
                                <Route path="/hoje" element={<TodayScreen />}/>
                            </Routes>
                        </BrowserRouter>
                     </DayProgessContext.Provider >
                </UserContext.Provider>
        </>
    )
}