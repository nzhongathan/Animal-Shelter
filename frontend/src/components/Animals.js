import React from 'react'
import './Animals.css'
import Button from 'react-bootstrap/Button'
import AnimalCard from "./AnimalCard"
import 'bootstrap/dist/css/bootstrap.min.css'

function unique(value, index, self) {
    return self.indexOf(value) === index;
}

const Animal = (props) => {
    const [data, setData] = React.useState(null)
    const [allData, setAllData] = React.useState(null)
    const [selected, setSelected] = React.useState("none");
    const changeSelected = (event) => {
        setSelected(event.target.value);
    }
    React.useEffect(() => {
        fetch("http://localhost:3001/db/all")
            .then(res => res.json())
            .then(allData => setAllData(allData.filter(unique)))
    }, [])
    React.useEffect(() => {
        fetch("http://localhost:3001/db/" + selected)
            .then(res => res.json())
            .then(data => setData(data))
    }, [selected])
    var modal = null
    const modalHandler = (event) => {
        console.log(event.target.id)
        modal = document.getElementById(event.target.id + "-modal")
        modal.style.display = "block"
    }
    
    const spanHandler = (event) => {
        modal.style.display = "none"
    }
    

    return (
        <section>
            <br></br>
            <h1> Animals </h1>
            <form>
                <label class = "text-muted"> What are you looking for?</label>
                <select class = "form-select" id = "center" onChange = {changeSelected}>
                    <option value = "none">Select an Option</option>
                    {allData === null ? " " : allData.filter(unique).map(doc => <option value = {doc}>{doc} </option>)}
                </select>
            </form> 
            <br></br>
            <div id = "center1">
                <div class = "grid">
                    {data === null ? " " : data.map(pet => {
                        return (
                            <section>
                                <div class = "card" id = "animalCard">
                                    <img src = {pet.picture} class = "card-img-top" width = "320px" height = "300px"></img>
                                    <div class = "card-body">
                                        <h5 class = "card-title">{pet.name}</h5>
                                        <p class = "card-text">Breed: {pet.breed}</p>
                                        <p class = "card-text">Gender: {pet.gender}</p>
                                        <button type = "button" class = "btn btn-light" id = {pet.name} onClick = {modalHandler}>Find Out More</button>{' '}
                                    </div>
                                </div>

                                <div id = {pet.name + "-modal"} class = "modal"><div class = "modal-content"><span class = "close" onClick = {spanHandler}>&times;</span>
                                    <AnimalCard pet = {pet}/>
                                </div></div>
                            </section>
                        )
                    })}
                </div>
            </div>
            <br></br>
            <br></br>
        </section>
    )
}
export default Animal