import styled from "styled-components";
export default function DayButton({children,selected,index,ChangeColor,isDisabled}){
    return (
        <Button onClick={()=>{ChangeColor(index)}} disabled={isDisabled} selected={selected}>
        {children}
        </Button>
    )
}

const Button=styled.button`
    width:30px;
    height:30px;
    border-radius:5px;
    margin: 0 4px 80px 0;
    border:1px solid;
    font-size:20px;
    border-color: ${props=>props.selected ? "#CFCFCF" : "#D4D4D4"};
    background-color: ${props=>props.selected ? "#CFCFCF" : "#FFFFFF"} ;
    color: ${props=>props.selected ? "#FFFFFF" : "#DBDBDB"};
    &:hover{
        cursor:pointer;
        filter:brightness(1.15);
        transform: translateY(-2px);
    }
    `;
