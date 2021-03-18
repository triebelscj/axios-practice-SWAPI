
import React, { useState } from 'react';
import { navigate } from '@reach/router';



function Home() {
    const [search, setSearch] = useState('person');
    const [id, setId] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(search, id)
        if (search == "person") {
            navigate(`/person/${id}`)
        }
        else {
            navigate(`/planet/${id}`)
        }
    }


    return (
        <div>
            <form className="search-form" onSubmit={handleSubmit}>
                <label>Search For:</label>
                <select className="options" name="search" onChange={(e) => setSearch(e.target.value)}>
                    <option value="person">People</option>
                    <option value="planet">Planets</option>
                </select>
                <input type="text" name="id" placeholder="#Id" onChange={(e) => setId(e.target.value)} />
                <button type="submit" >Search</button>
            </form>
        </div>
    )
}

export default Home
