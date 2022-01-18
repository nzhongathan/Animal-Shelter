import React from 'react'
import Login from './Login'

const employees = new Map();
employees.set("Worker1", "Password1")
employees.set("Worker2", "Password2")
employees.set("Worker3", "Password3")

const Adding = (props) => {
    const [ username, changeUsername ] = React.useState(null)
    const [ password, changePassword ] = React.useState(null)
    const [ res, changeRes ] = React.useState(null)
    var loginSuccessful = false;
    
    const setUsername = (event) => {
        changeUsername(event.target.value)
    }
    const setPassword = (event) => {
        changePassword(event.target.value)
    }

    const submit = (event) => {
        const options = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: username, password: password})
        }
        fetch("http://localhost:3001/userLogin/login", options)
            .then(response => {
                if (response.status != 200) {
                    document.getElementById("loginStatus").innerHTML = "Login Incorrect"
                    document.getElementById("username").value = ""
                    document.getElementById("password").value = ""
                } else {
                    return response.json()
                }
            })
            .then(data => 
                fetch("http://localhost:3001/userLogin/welcome?token=" + data.token)
                    .then(response => {
                        if (response.status == 200) {
                            window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf("/")+1) + "User"
                        } else {
                            document.getElementById("loginStatus").innerHTML = "Login Failed"
                            document.getElementById("username").value = ""
                            document.getElementById("password").value = ""
                        }
                    })
            )
    }


    return (
        <section>
            <br></br>
            <h1> Please Log In First: </h1>
            <br></br>
            <div>
                <label>Email:&nbsp;&nbsp;</label>
                <input id ="username" type="text" placeholder="Enter Email" onChange = {setUsername} required></input>
                <br></br>
                <br></br>
                <label> Password:&nbsp;&nbsp;</label>
                <input id = "password" type = "password" placeholder = "Enter Password" onChange = {setPassword} required></input>
                <br></br>
                <br></br>
                <button class = "btn btn-light" type = "submit" onClick = {submit}>Login</button>
                <p id = "loginStatus"></p>
            </div>
        </section>
    )
}
export default Adding