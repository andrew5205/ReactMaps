import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {Link, navigate} from '@reach/router';


const EditItem = ({num}) => {

    const [item, setItem] = useState(null);

    // validation
    const [errors, setErrors] = useState([]);

    useEffect (() => {
        axios.get('http://localhost:4500/api/items/' + num)
            .then(response => setItem(response.data))
    }, []);

    function onChangeHandler(event) {
        const {name, value} = event.target;
        setItem({
            ...item,
            [name]: value 
        });
    }

    function handleSubmit(event) {
        console.log('here!')
        event.preventDefault();

        axios.put('http://localhost:4500/api/items/' +num, item)  
            .then(()=> navigate('/items/' + num))  //what path we r trying to go to // navigate to another page in the app 
            // .then(response => setPet(response.data))
            .catch(err => {  //validation
                const errorResponse = err.response.data.errors;
                const errorArr = [];

                // const arr = [];
                for ( const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            });
    }

    if(item === null) {
        return 'LOADING...';
    }

    return(
        <div>
            <Link to='/items'>Home</Link> 
            <form onSubmit={handleSubmit}>
                {errors.map((err, i) => (
                    <p key={i} style={{ color: 'red' }}>{err}</p>))}
                <div>
                    <label>Name:</label> <br/>
                    <input
                        name="name"
                        value={item['name']}
                        onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <label>Address:</label> <br/>
                    <input
                        name="address"
                        value={item['address']}
                        onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <label>ImageUrl:</label> <br/>
                    <input
                        name="imageUrl"
                        value={item['imageUrl']}
                        onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <button  onClick={() => navigate('items/'+ item._id) }>Edit</button>
                    <button type="button" onClick={() => navigate('/items/' + item._id) }>Cancel</button> 
                </div>
            </form>
        </div>
    );


}

export default EditItem;


