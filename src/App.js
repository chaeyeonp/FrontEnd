// in src/App.js
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import UserPage from './userPage';
import adminPage from './adminPage';


export default function App() {

    return (
        <Router>
            <div>
                <li>
                    <Link to="/admin">admin</Link>
                </li>
                <li>
                    <Link to="/userpage">userpage</Link>
                </li>

                <Route path="/admin" component={adminPage}/>
                <Route path="/userpage" component={UserPage}/>
            </div>
        </Router>
    )
}
