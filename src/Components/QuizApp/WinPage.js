import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import QuizApp from "./QuizApp";
import MovieApp from "../MovieApp/MovieApp";
import Home from '../Home';

const WinPage = () => {
    const [view, setView] = useState(null);
    const location = useLocation();
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const params = searchParams.get('view');
        if (params) {
            setView(params);
        }
    }, [location]);

    return (<>
            {
                view === "1" ? <QuizApp/> : view === "2" ? <Home/> :
                    <MovieApp/>
            }
        </>

    )
}
export default WinPage;

