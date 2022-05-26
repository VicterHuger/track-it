import styled from "styled-components";

const Button=styled.button`
    width:80%;
    background-color:#52B6FF;
    border-radius:5px;
    color:  #FFFFFF;
    height:45px;
    font-size:21px;
    border:none;
    margin-bottom:25px;
    opacity:${props=>(props.isDisabled ? 0.7 : 1)};
    display:flex;
    align-items:center;
    justify-content:center;
`;

export default Button;