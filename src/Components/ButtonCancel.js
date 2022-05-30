import styled from "styled-components";
export default function ButtonCancel({children,isDisabled}){
    return (
        <Button isDisabled={isDisabled}>
            {children}
        </Button>
    );
}

const Button=styled.button`
    height:35px;
    width:28%;
    font-size:16px;
    color:#52B6FF;
    border:none;
    position:absolute;
    bottom:15px;
    right:46%;
    background-color:#FFFFFF;
    opacity:${props=>props.isDisabled? 0.7 :1};
    &:hover{
        cursor:pointer;
        filter:brightness(1.15);
        transform: translateY(-2px);
    };
`;