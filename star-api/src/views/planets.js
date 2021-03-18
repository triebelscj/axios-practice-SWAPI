import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Planets(props) {

    const [planet, setPlanet] = useState({})
    const [error, setError] = useState("")

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${props.id}`)
            .then(response => {
                console.log(response.data)
                setPlanet(response.data)
                console.log(planet)
            })
            .catch((err) => {
                setError("error as heck has occured")
            })
    }, [props.id]);
    return (
        <div>
            <p>{planet.name}</p>
            <p>{planet.gravity}</p>
            <p>{planet.climate}</p>
            <p>{planet.terrain}</p>
        </div>
    )
}

export default Planets
