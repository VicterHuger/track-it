import styled from "styled-components";
export default function DayBlock({children,selected}){
    return (
        <Button selected={selected}>
        {children}
        </Button>
    );
}

const Button=styled.button`
    width:30px;
    height:30px;
    border-radius:5px;
    margin: 0 4px 15px 0;
    border:1px solid;
    font-size:20px;
    border-color: ${props=>props.selected ? "#CFCFCF" : "#D4D4D4"};
    background-color: ${props=>props.selected ? "#CFCFCF" : "#FFFFFF"} ;
    color: ${props=>props.selected ? "#FFFFFF" : "#DBDBDB"};
`;