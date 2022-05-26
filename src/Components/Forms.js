import styled from "styled-components";
import {ThreeDots} from "react-loader-spinner";

import Input from "../Styles/Input";
import Button from "../Styles/Button";


export default function Forms({children,formData, submitFunction, isDisabled, handleForm}){

  

    const buttonContent= ()=>{
        if(isDisabled){
            return (<ThreeDots heigth={13} width={51} radius={50} color="#FFFFFF" />);
        }else{
            return "Entrar";
        }
    }

    return (
        <FormStyle onSubmit={submitFunction}>
            <Input type="email" name="email" onChange={handleForm} placeholder="email" value={formData.email} disabled={isDisabled} isDisabled={isDisabled} required/>
            <Input type="password" name="password" onChange={handleForm} placeholder="senha" value={formData.password} disabled={isDisabled} isDisabled={isDisabled} required/>
            {children}
            <Button type="submit" isDisabled={isDisabled}>{buttonContent()}</Button>
        </FormStyle>
        
    );
}

const FormStyle = styled.form`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`;