import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import QuizApp from "./QuizApp";
import MovieApp from "../MovieApp/MovieApp";

const data = [
    {list: "Get coins on the completion of each quiz."},
    {list: "Upgrade your skills with our top quizzes."},
    {list: "We have many top trending categories like Cricket, World, India, Business & many more!"},
    {list: "Millions of quiz admirer like you showed trust on us."},
    {list: "Challenge lakhs of players from across the world!"}
]


const WinPage = () => {
    const [view, setView] = useState(null);
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const params = searchParams.get('view');
        if(params) {
            setView(params);
        }
        console.log(params);
    });
    const navigate = useNavigate();

    return (<>
            {
                view === "1" ? <QuizApp/> : view === "2" ? <MovieApp/> :
                    <div className="main_win">
                        <div className="win_container">
                            <div className="page_topper">
                                <img alt="img" className="win_icon"
                                     src={"https://play240.atmequiz.com/img/coins-image.png"}/>
                                <h1 className="win_coin">You have got 200 coins</h1>
                                <p className="win_description">Check out more quizzes to test your skills and keeps
                                    grabbing more coins!</p>
                                <button className="btn_animation" onClick={() => navigate('?view=1')}>Play Now</button>
                            </div>
                            <div>
                                <section className="pointer">
                                    <h2>Play Quiz and Win Coins!</h2>
                                    <ul>
                                        {data.map((value, ind) =>
                                            <li key={ind}><span className="check_background"><CheckTwoToneIcon
                                                sx={{height: "14px", width: "21px"}}/></span>{value?.list}
                                            </li>)}
                                    </ul>
                                </section>
                            </div>
                            {/*<div className="footer">*/}
                            {/*    <div className="inner_footer">*/}
                            {/*        Made with <img width="17px" height="15px" src={"https://play240.atmequiz.com/img/heart-icon.svg"}/> in*/}
                            {/*        India <img width="17px" height="13px" src={"https://play240.atmequiz.com/img/india-flag-icon.svg"}/>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                        <div className="header2">
                            <div className="app-header2">
                                Made with <img width="17px" height="15px"
                                               src={"https://play240.atmequiz.com/img/heart-icon.svg"}/> in
                                India <img width="17px" height="13px"
                                           src={"https://play240.atmequiz.com/img/india-flag-icon.svg"}/>
                            </div>
                        </div>
                    </div>
            }
        </>

    )
}
export default WinPage;

