import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Login.css'


const Login = (props) => {
    const submitButton = (event) => {
        const options = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                animal: document.getElementById("animal").value,
                name: document.getElementById("name").value,
                breed: document.getElementById("breed").value,
                status: document.getElementById("status").value,
                gender: document.getElementById("gender").value,
                yearsOld: document.getElementById("age").value,
                picture: document.getElementById("URL").value,
                description: document.getElementById("description").value
            })
        }
        fetch('http://localhost:3001/db/user', options)
            .then(response => response.json())
        document.getElementById("animal").value = ""
        document.getElementById("name").value = ""
        document.getElementById("breed").value = ""
        document.getElementById("status").value = ""
        document.getElementById("gender").value = ""
        document.getElementById("age").value = ""
        document.getElementById("URL").value = ""
        document.getElementById("description").value = ""
    }

    return (
        <section>
            <br></br>
            <h1>Add an Animal!</h1>
            <br></br>
            <div>
                <label>Animal:&nbsp;</label>
                <input id ="animal" type="text" required></input>
                <br></br>
                <br></br>
                <label> Name:&nbsp;</label>
                <input id ="name" type="text" required></input>
                <br></br>
                <br></br>
                <label> Breed:&nbsp;</label>
                <input id ="breed" type="text" required></input>
                <br></br>
                <br></br>
                <label> Status:&nbsp;</label>
                <input id ="status" type="text" required></input>
                <br></br>
                <br></br>
                <label> Gender:&nbsp;</label>
                <input id ="gender" type="text" required></input>
                <br></br>
                <br></br>
                <label> Years Old:&nbsp;</label>
                <input id ="age" type="number" required></input>
                <br></br>
                <br></br>
                <label> Picture URL:&nbsp;</label>
                <input id = "URL" type = "text" required></input>
                <br></br>
                <br></br>
                <label> Description: &nbsp;</label>
                <input id = "description" type = "text" required></input>
                <br></br>
                <br></br>
                <button class = "btn btn-light" type = "submit" onClick = {submitButton}>Submit</button>
                <p id = "status"></p>
            </div>
        </section>
    )
}

export default Login