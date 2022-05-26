import styled from "styled-components";
import {ThreeDots} from "react-loader-spinner";

import Input from "../Styles/Input";
import Button from "../Styles/Button";


export default function Forms({children,isSignUp,email,setEmail,password,setPassword,doLogin,doSignUp, isDisabled}){

    return (
        <FormStyle onSubmit={isSignUp ? doSignUp : doLogin  }>
            <Input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="email" value={email} disabled={isDisabled} isDisabled={isDisabled} required/>
            <Input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="senha" value={password} disabled={isDisabled} isDisabled={isDisabled} required/>
            {children}
            <Button type="submit" isDisabled={isDisabled}>{isDisabled ? <ThreeDots heigth={13} width={51} radius={50} color="#FFFFFF" /> : "Entrar"}</Button>
        </FormStyle>
        
    );
}

const FormStyle = styled.form`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`;