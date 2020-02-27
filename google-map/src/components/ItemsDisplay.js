import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {Link, navigate} from '@reach/router';


const Items = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4500/api/items')
            .then(response => setItems(response.data))
            .catch(console.log);
    }, []);

    return (
        <div>
            <h3>List of items</h3>
            <Link to='/items/new'>Add a item</Link>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item._id}>  
                            <td>
                                <Link to={'/items/' + item._id}>{item.name}</Link>
                            </td>
                            <td>
                                {item.address}
                            </td>
                            <td>
                                <button onClick={() => navigate('items/' + item._id)}>Details</button>  
                                <button onClick={() => navigate('items/' + item._id + '/edit')}>Edit</button>
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Items;

