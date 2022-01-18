import React from 'react'
import './Request.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function unique(value, index, self) {
    return self.indexOf(value) === index;
}

const Request = (props) => {
    const [data, setData] = React.useState(null)
    const [allData, setAllData] = React.useState(null)
    const [selectedAnimal, setSelectedAnimal] = React.useState(null);
    const [selectedPet, setSelectedPet] = React.useState("none")
    const changeSelectedAnimal = (event) => {
        setSelectedAnimal(event.target.value);
    }
    const changeSelectedPet = (event) => {
        setSelectedPet(event.target.value)
    }
    const submit = (event) => {
        const options = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: selectedPet})
        }
        fetch('http://localhost:3001/db/', options)
            .then(response => response.json())
    }

    React.useEffect(() => {
        fetch("http://localhost:3001/db/all")
            .then(res => res.json())
            .then(allData => setAllData(allData.filter(unique)))
    }, [])
    React.useEffect(() => {
        fetch("http://localhost:3001/db/" + selectedAnimal)
            .then(res => res.json())
            .then(data => setData(data))
    }, [selectedAnimal])


    return (
        <section>
            <br></br>
            <h1> Request One </h1>
            <p><small class = "text-muted"> Thank you for requesting and helping one of our animals! </small></p>
            <br></br>
            <div class = "shape1">
                <div class = "container">
                    <form>
                        <label> Which animal are you adopting?</label>
                        <select class = "form-select" id = "selectAnimal" onChange = {changeSelectedAnimal}>
                            <option value = "none">Select an Option</option>
                            {allData === null ? " " : allData.filter(unique).map(doc => <option value = {doc}>{doc} </option>)}
                        </select>
                        <br></br>
                        <br></br>
                        <label> Which animal are you selecting?</label>
                        <select class = "form-select" id = "selectPet" onChange = {changeSelectedPet}>
                            <option value = "none">Select an Option</option>
                            {data === null ? " " : data.map(pet => <option value = {pet._id}>{pet.name}</option>)}
                        </select>
                        <br></br>
                        <br></br>
                        <button type = "button" class = "btn btn-light" onClick ={submit}>Submit</button>
                    </form> 
                </div>
            </div>
        </section>
    )
}
export default Request