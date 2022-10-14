import CheckTwoToneIcon from "@mui/material/SvgIcon/SvgIcon";
import React from "react";
import {useNavigate} from "react-router";
import {redirectUrl} from './constants';
import coinImage from '../images/coins-image.png';
import './QuizApp/QuizApp.css';

const data = [
    {list: "Get coins on the completion of each quiz."},
    {list: "Upgrade your skills with our top quizzes."},
    {list: "We have many top trending categories like Cricket, World, India, Business & many more!"},
    {list: "Millions of quiz admirer like you showed trust on us."},
    {list: "Challenge lakhs of players from across the world!"}
];


const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="main_win">
            <a rel="noreferrer" href={redirectUrl} style={{color: '#fff', textDecoration: 'none'}}>
                <div className="win_container">
                    <div className="page_topper">
                        <img alt="img" className="win_icon"
                             src={coinImage}/>
                        <h1 className="win_coin">You have got 200 coins</h1>
                        <p className="win_description">Check out more quizzes to test your skills and keeps
                            grabbing more coins!</p>
                        <a href={redirectUrl} rel="noreferrer" className="a_animation">
                            <button className="btn_animation">Play Now</button>
                        </a>
                    </div>
                    <div>
                        <section className="pointer">
                            <h2>Play Quiz and Win Coins!</h2>
                            <ul>
                                {data.map((value, ind) =>
                                    <li key={ind}><span className="check_background">
                                        <CheckTwoToneIcon
                                        sx={{height: "14px", width: "21px", color: 'white'}}/>
                                    </span>
                                        {value?.list}
                                    </li>)}
                            </ul>
                        </section>
                    </div>
                </div>
            </a>
        </div>
)
}

export default Home;