import styled from "styled-components";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ProgessBar(){
    return (
        <Container>
            <CircularProgressbar value={66} background={true} text='Hoje' backgroundPadding={6}
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