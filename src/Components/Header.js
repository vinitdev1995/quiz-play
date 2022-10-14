import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from "./Main";

const Header = () => {
    return (<>
        <Router>
            <Routes>
                <Route exact path="*" element={<Main/>}/>
            </Routes>
        </Router>
    </>)
}

export default Header;