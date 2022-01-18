import React from 'react'
import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const About = (props) => {
    return (
        <section>
            <br></br>
            <h1> About Us Page </h1>
            <br></br>
            <p>Our animal shelter, located in Atlanta, Georgia, hosts a variety of animals, from dogs to cats, taking in all
                kinds of animals. From all ages  <br></br>and varying health conditions,
                we take care of them all, giving them a place to call home before finding a permanent family. We hope that we are <br>
                </br>able to give you a place to not only find a 
                life-long partner but also give these animals a chance, providing them not only home but also a family.
            </p>
            <img src = {require("./pictures/about.png")} class = "center"></img>
            <br></br>
            <div class = "shape">
                <div class = "container">
                    <h3> Mission Statement</h3>
                    <p class = "lead">To serve, protect, and cherish animals, giving them a place to call home and an opportunity to find a family!</p>
                </div>
            </div>
            <br></br>
            <br></br>
            <h3>Wish List</h3>
            <p><small class = "text-muted">Any donations are always welcomed!</small></p>
            <div class = "center">
                <ul class = "list-group" id = "wishlist">
                    <li class = "list-group-item border-0"><input class = "form-check-input me-1" type = "checkbox" value = "" aria-label = "..." disabled></input>Canned dog and cat food</li>
                    <li class = "list-group-item border-0"><input class = "form-check-input me-1" type = "checkbox" value = "" aria-label = "..." disabled></input>Dog treats and toys</li>
                    <li class = "list-group-item border-0"><input class = "form-check-input me-1" type = "checkbox" value = "" aria-label = "..." disabled></input>Cat scratchers</li>
                    <li class = "list-group-item border-0"><input class = "form-check-input me-1" type = "checkbox" value = "" aria-label = "..." disabled></input>Trash Bags, paper towels, cleaning supplies</li>
                    <li class = "list-group-item border-0"><input class = "form-check-input me-1" type = "checkbox" value = "" aria-label = "..." disabled></input>Puppy pads, wipes, old cages</li>
                </ul>
            </div>
            <br></br>
            <br></br>
            <h3>Volunteering Information</h3>
            <p> We would love to have you come volunteer with our team.</p>
            <p>Please contact us at (999)-999-9999 or email us at volunteer@animalshelter.com</p>
            <br></br>
            <br></br>
            <h3>Adoption Hours</h3>
            <p>Monday-Friday: 9am-5pm</p>
            <p>Saturday: 10am-5pm</p>
            <p>Sunday: 12pm-5pm</p>
            <p><small class = "text-muted"><em>Times subject to change with holidays.</em></small></p>
            
            
        </section>
    )
}
export default About 