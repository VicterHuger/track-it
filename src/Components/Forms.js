import styled from "styled-components";

export default function Forms({children,isSignUp,email,setEmail,password,setPassword,doLogin,doSignUp}){

    return (
        <FormStyle onSubmit={isSignUp ? doSignUp : doLogin  }>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="email" value={email} required/>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="senha" value={password} required/>
            {children}
            <button type="submit">Entrar</button>
        </FormStyle>
        
    );
}

const FormStyle = styled.form`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    input{
        width:80%;
        margin-bottom:6px;
        padding:9px 4%;
        background-color:#ffffff;
        border: 1px solid #D4D4D4;
    }
    input::placeholder{
        color:#DBDBDB;
        font-size:20px;
    }
    button{
        width:80%;
        background-color:#52B6FF;
        border-radius:5px;
        color:  #FFFFFF;
        height:45px;
        font-size:21px;
        border:none;
        margin-bottom:25px;
    }
`;