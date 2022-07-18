import styled from "styled-components";

function displayErrorMessage(errorMessage){
    if(errorMessage){
        return(
        <ErrorDiv>
            <h4>{errorMessage}</h4>
        </ErrorDiv>

    )}
};

const ErrorDiv=styled.div`
width:80%;
display:flex;
flex-direction:center;
justify-content:center;
padding:0.7rem 0;
background-color:#FFE0E0;
margin-bottom:10px;
> h4{
    font-size:14px;
    color:#F8171D;
}
`;

export default displayErrorMessage;