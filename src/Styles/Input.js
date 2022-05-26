import styled from "styled-components";

const Input=styled.input`
    width:80%;
    margin-bottom:6px;
    padding:9px 4%;
    background-color:${props=>(props.isDisabled ? "#F2F2F2" : "#FFFFFF")};
    border: 1px solid #D4D4D4;
    &::placeholder{
        color:${props=>(props.isDisabled ? '#AFAFAF' : '#DBDBDB')};
        font-size:20px;
    }
`;

export default Input;