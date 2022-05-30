import styled from "styled-components";
export default function ButtonSave({children,isDisabled,SaveHabit}){
    return(
        <Button disabled={isDisabled} isDisabled={isDisabled} onClick={()=>SaveHabit()}>{children}</Button>
    );
}
const Button=styled.button`
    height:35px;
    width:28%;
    font-size:16px;
    background-color:#52B6FF;
    color:#FFFFFF;
    border:none;
    position:absolute;
    bottom:15px;
    right:5%;
    border-radius:5px;
    opacity:${props=>props.isDisabled? 0.7 :1};
    &:hover{
        cursor:pointer;
        filter:brightness(1.15);
        transform: translateY(-2px);
    };
`; 