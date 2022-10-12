import React from 'react';
import './QuizApp.css';
import data from "./QuizAppData.json"
import {useNavigate} from 'react-router-dom'
import styled from "@emotion/styled";
import Badge from '@mui/material/Badge';


const QuizApp = () => {

    const StyledBadge = styled(Badge)(() => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#55e6c1',
            color: '#55e6c1',
            width: "12px",
            height: "12px",
            borderRadius: "10px",
            '&::after': {
                position: 'relative',
                top: 0,
                left: 0,
                width: '11px',
                height: '6px',
                borderRadius: '10px',
                animation: 'ripple 1s infinite ease-in-out',
                border: '3px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2)',
                opacity: 0,
            },
        },
    }));
    return (
        <div className="main">
            <div className="header">
                <div className="app-header">Quiz App</div>
                <div className="header-right">
                    <div className="total-coins">
                        <div className="pulse">
                            <img src="https://play240.atmequiz.com/img/coin-icon.png" alt="Coin" height="24px" className="puls-image"/>
                        </div>
                        <div className="coin-detail">
                            <div className="coin-value">100</div>
                            <div className="coin-text">Coins</div>
                        </div>
                    </div>
                    <div className="notification ring">
                        <img src="https://play240.atmequiz.com/img/notifications-icon.svg" alt="Notifications"/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="quiz-contests">
                    <div className="quiz-contests-list">
                        {data?.length > 0 && data?.map((item) =>
                            <div className="quiz-card">
                                <div className="card-content">
                                    <div className="thumbnial-img">
                                        <img src={item?.cardImg} alt="FILM AND CELEBRITY Contest Quiz"/>
                                    </div>
                                    <div className="quiz-name-status">
                                        <div className="category-live-div">
                                            <span className="categories">{item.heading}</span>
                                            {item.isLive && <span className="status-live">
                                                <StyledBadge overlap="circular" anchorOrigin={{vertical: 'left', horizontal: 'right'}}
                                                             variant="dot"> </StyledBadge>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Live</span>}
                                        </div>
                                        <h3>Play and Win {item.WinAmount} &nbsp;<img src="https://play240.atmequiz.com/img/coin-icon.png" width="19"
                                                                                     alt="coin"/></h3>
                                        <p>Winner announcement @ {item.winnerAnnouncementTime}</p>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <p>
                                    <span>Entry : <strong>{item.entry}</strong>&nbsp;&nbsp;
                                        <img src={item.imgURL} width="16" alt="coin"/>
                                    </span>
                                        <span>
                                        <strong>{item.users}</strong> Users Playing
                                    </span>
                                    </p>
                                    <a
                                        // target="_blank"
                                        title=""
                                        className="btn btn-small"
                                        href="https://play240.atmequiz.com/film-and-celebrity-quiz/join-contest?contestId=63452281d5f70c4c409e46e2"
                                    >Play
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuizApp;