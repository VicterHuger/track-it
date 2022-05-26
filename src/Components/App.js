import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./../Styles/globalStyles";
import LoginScreen from "./LoginScreen";
import SignUp from "./SignUp";

export default function App(){
    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginScreen/>}/>
                    <Route path="/cadastro" element={<SignUp/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}