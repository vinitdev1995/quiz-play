import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import QuizApp from "./QuizApp/QuizApp";
import MovieApp from "./MovieApp/MovieApp";

const Header = () => {

    return (<>
        <Router>
            <Routes>
                <Route exact path="/" element={<QuizApp/>}/>
                <Route exact path="/1" element={<QuizApp/>}/>
                <Route exact path="/2" element={<MovieApp/>}/>
            </Routes>
        </Router>
    </>)
}

export default Header;