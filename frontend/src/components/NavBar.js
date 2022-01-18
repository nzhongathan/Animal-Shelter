import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './NavBar.css'
import { BrowserRouter, Switch, Route, Link } from  'react-router-dom'

const NavBar = (props) => {
    return (
        <nav class = "navbar navbar-expand-lg navbar-light bg-light sticky-top" id = "navbar">
            <Link class = "navbar-brand mb-0 h1" to = "/"> Nathan's Animal Shelter</Link>
            <div id = "items">
                <ul class = "navbar-nav">
                    <li class = "nav-item active">
                        <Link class = "nav-link" to = "/About"> About Us </Link>
                    </li>
                    <li class = "nav-item active">
                        <Link class = "nav-link" to = "/Animals"> Animals</Link>
                    </li>
                    <li class = "nav-item active">
                        <Link class = "nav-link" to = "/Request"> Request One!</Link>
                    </li>
                    <li class = "nav-item active">
                        <Link class = "nav-link" to = "/Adding">Add an Animal</Link> 
                    </li>
                </ul>
            </div>
        </nav>
        
    )
}
export default NavBar