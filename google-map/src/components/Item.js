import React, {useState, useEffect} from 'react';

import axios from 'axios';
import {Link, navigate} from '@reach/router';

const Item = ({ num }) => {     // {id} from DB?
    const [item, setItem] = useState(null); //initial state has nothing inside

    useEffect(() => {
        axios.get('http://localhost:4500/api/items/' + num)
            .then(response => setItem(response.data))
            .catch(console.log)
    }, []);

    function handleDelete(num) {
        axios.delete('http://localhost:4500/api/items/' + num)
            .then(()=> navigate('/items'))
    }

    if (item === null) {
        return 'Loading...';
    }

    return(
        <div>
            <Link to='/items'>Home</Link>
            <h3>Details about {item.name}</h3>
            <p>Address: {item.address}</p>
            <p>{item.imageUrl}</p>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
        </div>
    );

}

export default Item;
