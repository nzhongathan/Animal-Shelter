import React from 'react'
import './Home.css'



const Home = (props) => {
    return (
        <section className = "body">
            <br></br>
            <h1> Nathan's Animal Shelter </h1>
            <p class = "motto"><small class = "text-muted">Giving animals homes one by one</small></p>
            <br></br>
            <p> Welcome to Nathan's Animal Shelter, where we give animals homes!<br></br>
            Please take a look at our collection of animals and consider adopting one.</p>
            <img src = {require("./pictures/homepage.png")} class = "center" width = "250"></img>
        </section>
    )
}

export default Home