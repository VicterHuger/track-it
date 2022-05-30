import styled from "styled-components";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import DayProgessContext from "../Contexts/DayProgessContext";


export default function ProgessBar(){
    const {progress}=useContext(DayProgessContext);
    return (
        <Container>
            <CircularProgressbar value={progress.percentage} background={true} text='Hoje' backgroundPadding={6}
            styles={buildStyles({
                textSize: '18px', 
                backgroundColor: '#52B6FF',
                textColor:"#FFFFFF",
                trailColor:"#52B6FF",
                pathColor:"#FFFFFF",
                pathTransitionDuration: 1,

            })} />
        </Container>
    );
}

const Container=styled.div`
width:91px;
height:91px;
margin-bottom:40px;
`;