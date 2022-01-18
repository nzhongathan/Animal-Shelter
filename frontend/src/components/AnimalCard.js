import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './AnimalCard.css'

const AnimalCard = (props) => {
    return (
        <section>
            <h1>{props.pet.name}</h1>
            <img src = {props.pet.picture} width = "50%"></img>
            <br></br>
            <br></br>
            <div class = "center">
                <table class = "table table-sm table-borderless">
                    <tbody>
                        <tr>
                            <td id = "tdTitle">Breed:</td>
                            <td>{props.pet.breed}</td>
                        </tr>
                        <tr>
                            <td id = "tdTitle">Status:</td>
                            <td>{props.pet.status}</td>
                        </tr>
                        <tr>
                            <td id = "tdTitle">Gender:</td>
                            <td>{props.pet.gender}</td>
                        </tr>
                        <tr>
                            <td id = "tdTitle">Age:</td>
                            <td>{props.pet.yearsOld}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br></br>
            <p>{props.pet.description}</p>
        </section>
    )
}

export default AnimalCard