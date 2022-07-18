# Track It!

A habits tracking app written in React that allows you to improve your discipline! There you can set you goals, to complete and to verify in a calendar how in which days you completed your goals and you didn't!

<p align="center" display="flex">
<img src="https://github.com/VicterHuger/track-it/blob/main/demo/TrackIt.gif" alt="track it usage" />)
</p>

Try it out: [Track It](https://track-it-flax.vercel.app/)!

## About

- Sign Up: The user must sign up to keep his habits progression saved! To sign up, the user needs to write a valid email, an password of interest, an user name and a valid photo link to be used as an avatar image on pages applications! To acess this page, the user needs to click on "Não tem uma conta? Cadastre-se" on login page or add a url pathname "/cadastro" to domain URL. When the sign up be sucessfull, the user will be redirected to login page!

- Log in: After completing sign up, the user must input his email and password signup! If unsucessfull, a message will display bellow button to log in explaing which error was commited! If the log in be sucessful, the user will be logged, his token will saved to persist his log in and he will be redirected to "Hoje" Screen!

- Hoje: If the user is logged, the user will have acess to habbits that he/she should have completed today! Also, clicking on "Hoje" text, the user will be redirected to Hoje page. The user can toggle on icon check to send to server that he completed or not completed his chore of today! If there isn't habbits to be completed today, a message will display saying there is no habtis to complet on this day. On footer, if habits be parcial or total completed an circular progression bar will display in a circle around "Hoje" text!

- Hábitos: Clicking "Habitos" text the user will be redirected to his habbits sign up! On this page, he can sing up or delete his sing up habits. For each habit, it is possible to choose in which days this habbit must be completed. By clicking on :heavy_plus_sign: a forms with name habit and days of week will be displayed to user interaction. On clicking on save button, the habit will be saved. Otherwise, clicking on cancel button, the forms will disapear.

- Histórico: On this screen a calendar will show up! If there are more than one day of the first day of tracking habits, the days that all habits were completed, they will show up round and with a green color. If they were parcial or not completed, the will show up round and red colored. If you click on the day that were habits to be completed, will be loaded the habits and their status on that day! The day of today will be rendered with an yellow color if there are more than 1 day of tracking habits!

- Logout: Once clicking on the upper rigth icon, the user will be logged out and his session will be over. The user will be redirected to login page, where he can login again!

## Technologies

<img align="left" alt="React" heigth="100px" src="https://badges.aleen42.com/src/react.svg" />

</br>
</br>

## How to run
-On your directory, run git clone https://github.com/VicterHuger/track-it. When finished, with node process manager, use npm i to install all the necessary dependencies. 

