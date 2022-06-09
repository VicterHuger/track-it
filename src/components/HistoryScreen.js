import{ useState, useEffect, useContext, useCallback } from 'react';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from "dayjs";
import { RotatingLines } from 'react-loader-spinner';

import UserContext from '../contexts/UserContext';
import styled from "styled-components";
import Header from "./Header";
import Navbar from "./Navbar";
import axios from 'axios';
import Loading from '../assets/styles/Loading';

export default function HistoryScreen(){
    window.scrollTo(1,0);
    require('../assets/styles/calendarstyle.css')
    require('dayjs/locale/pt-br');
    dayjs().locale('pt-br');

    const {userData}=useContext(UserContext);
    const [value, setValue] = useState(new Date());
    const [dailyHistory,setDailyHistory]=useState([]);
    const [calendarDayClicked,setCalendarDayClicked]=useState(null);
    const [loading,setLoading]=useState(true);
   
    
    const getHistoricDaylyHabbits=useCallback(()=>{
        const config ={
            headers:{
                Authorization: `Bearer ${userData.token}`,
            },
        }
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily", config)
            .then(res=>{
                setLoading(false);
                return setDailyHistory([...res.data])})
            .catch(err=>{
                setLoading(false);
                return alert(err.response.data.message)});
    },[userData.token]);

    function createArrayHabitsAreCompleteds(){
        const isDoneNewArray=[];
        dailyHistory.forEach((dDate,index)=>{
            let isDone=true;
            if(index!==0){
                for(let i=0; i<dDate.habits.length; i++){
                    if(dDate.habits[i].done===false){
                        isDone=false;
                        break;
                    }
                }
                return isDoneNewArray.push(isDone);
            }
            
        });
        return isDoneNewArray;
    }

    function createArrayDatesHabits(){
        const arrayOfDates=[];
        dailyHistory.forEach((dDate,index)=>{
            if(index!==0) return arrayOfDates.push(dDate.day);
            return;
        });
        return arrayOfDates;
    }


    useEffect(()=>{
        getHistoricDaylyHabbits();
    },[getHistoricDaylyHabbits]);


    function tileClassName({ date, view }) {
        // Add class to tiles in month view only
        if (view === 'month') {
            // Check if a date React-Calendar wants to check is on the list of dates to add class to
            if (wasHabitDay(dailyHistory,date)) {
                const isDoneHabitArray=createArrayHabitsAreCompleteds();
                const arrayOfDates=createArrayDatesHabits();
                
                let index=arrayOfDates.indexOf(dayjs(date).locale('pt-br').format('DD/MM/YYYY'));
        
                if(isDoneHabitArray[index]){
                    return 'rounded-button habbits-completed';
                }
                return 'rounded-button habbits-non-completed';
            }
        }
    }

    function wasHabitDay(arrayDays,day2){
        return (arrayDays.find((dDate,index) => {
             if(index!==0) {
                return dDate.day===dayjs(day2).locale('pt-br').format('DD/MM/YYYY');
             }
            return "";
        }));
    }

    function returnIndexDay(calendarDayClicked){
        for(let i=1; i<dailyHistory.length; i++){
            if(dailyHistory[i].day===dayjs(calendarDayClicked).locale('pt-br').format('DD/MM/YYYY')){
                return i;
            }
        }
    }
    
    const clickedDay = (()=>{
        if(calendarDayClicked && wasHabitDay(dailyHistory,calendarDayClicked)){
            const index=returnIndexDay(calendarDayClicked);
            return (
                <DayInfo >
                    <h2>{`Hábitos do dia ${dayjs(calendarDayClicked).locale('pt-br').format('DD/MM/YYYY')}`}</h2>
                    {dailyHistory[index].habits.map((habit,index)=>{
                     
                    return(
                        <div key={index} >
                            <h3>{habit.name}</h3>
                            {habit.done ? <ion-icon name="checkmark"></ion-icon> : <ion-icon name="close-circle"></ion-icon>}
                        </div>
                    )})}
                    <span>
                        <ion-icon name="close-circle"onClick={()=>setCalendarDayClicked(false)}></ion-icon>
                    </span>
                </DayInfo>
            )
        }
        return;
    })

    const renderClikedDayInfo=clickedDay();



    return (
        <>
            <Header/>
            <Content  calendarDayClicked={calendarDayClicked} wasHabitDay={wasHabitDay} dailyHistory={dailyHistory} >
                {loading ? 
                    <Loading>
                         <RotatingLines 
                            width="200"
                            height="200"
                            strokeColor="#126BA5"
                            animationDuration="1"
                          />
                    </Loading>
                :
                <>
                    <h3>Histórico</h3>
                    <div>
                        <Calendar 
                            onChange={(date)=>setValue(date)} 
                            value={value} 
                            defaultView="month" 
                            locale='pt-br'
                            tileClassName={tileClassName}
                            onClickDay={(value) => setCalendarDayClicked(value)}
                            />
                    </div>
                </>}
            </Content>
            {renderClikedDayInfo}
            <Navbar/>
        </>
    )
}
const Content=styled.div`
    margin:98px 0;
    width:100%;
    padding:0 5%;
    opacity:${props=>((props.calendarDayClicked && props.wasHabitDay(props.dailyHistory,props.calendarDayClicked)) ? 0.2 : 1)};
    &>h3{
        color:#126BA5;
        font-size:23px;
        margin-bottom:18px;
    }
    &>p{
        color:#666666;
        font-size:18px;
    }
    &>div:nth-child(1){
        display:flex;
        justify-content:center;
        align-items:center;
        height:402px;
        width:100%;
    }
    &>div>div{
        border:none;
        box-shadow:0px 2px 4px 0px rgba(0,0,0,0.15);
        border-radius:5px;
        width:100%;
        height:100%;
    }
    &>div>div>.react-calendar__viewContainer{
        height:85%;
    }
    &>div>div>.react-calendar__viewContainer>div,&>div>div>.react-calendar__viewContainer>div>div, &>div>div>.react-calendar__viewContainer>div>div>div{
        height:100%;
    }
    &>div>div>.react-calendar__viewContainer>div>div>div>:nth-child(2){
        height:92%;      
    }
`;
const DayInfo=styled.div`
position:fixed;
top:120px;
left:10%;
width:80%;
min-height:300px;
background-color:#ffffff;
display:flex;
flex-direction:column;
padding:13px 4%;
box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.15);

&>h2{
    margin:50px auto;
    font-size:20px;
    color:#126BA5;
}

&>div{
    display:flex;
    width:100%;
    padding:0 10%;
    justify-content:space-between;
    align-items:center;
}
&>div>h3{
    font-size:20px;
    color:#666666;
    margin-bottom:40px;
}
&>div>ion-icon{    
    font-size:30px;
    margin-bottom:40px;
}     
&>div>ion-icon[name=close-circle]{
    color:red;
}   
&>div>ion-icon[name=checkmark]{
    color:green;
}    

&>span{
    position:fixed;
    top:130px;
    right:12%;
}
&>span>ion-icon{
    color:#126BA5;
    font-size:30px;
}
`;