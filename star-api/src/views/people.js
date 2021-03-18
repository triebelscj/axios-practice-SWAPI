import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function People(props) {
    // fill out the pararmeters with the data type i am expecting.
    const [person, setPerson] = useState({})
    const [error, setError] = useState("")

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${props.id}`)
            .then(response => {
                console.log(response.data)
                setPerson(response.data)
                console.log(person)
            })
            .catch((err) => {
                setError("error as heck has occured")
            })
    }, [props.id]);


    return (
        <div>
            {/* {JSON.stringify(person)} */}
            <p>{person.name}</p>
            <p>{person.height}</p>
            <p>{person.mass}</p>
            <p>{person.hair_color}</p>
        </div>
    )
}

export default People
