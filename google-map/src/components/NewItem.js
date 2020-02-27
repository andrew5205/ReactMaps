import React, {useState} from 'react';
// due to form data


import axios from 'axios';
// due to make some call back to the server 
import {Link, navigate} from '@reach/router';


// import AuthorForm from '../components/AuthorForm';

const NewItem = () => {

    const [formState, setFormState] = useState({
        name: '',
        address: '',
        imageUrl: '',
    })

    // validation 
    const [errors, setErrors] = useState([]);



    function onChangeHandler(event) {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        axios.post('http://localhost:4500/api/items', formState)  
            .then(()=> navigate('/pets'))  //what path we r trying to go to // navigate to another page in the app 
            .catch( err => {  //validation
                const errorResponse = err.response.data.errors;
                const errorArr = [];

                // const arr = [];
                for ( const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            });
    }


    return (
        <div>
            <Link to='/items'>Home</Link>
            <form onSubmit={handleSubmit}>
                {errors.map((err, i) => (
                    <p key={i} style={{ color: 'red' }}>{err}</p>))}
                <div>
                    <label>Name:</label> <br/>
                    <input
                        name="name"
                        value={formState['name']}
                        onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <label>Address:</label> <br/>
                    <input
                        name="address"
                        value={formState['address']}
                        onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <label>Image URL:</label> <br/>
                    <input
                        name="imageUrl"
                        value={formState['imageUrl']}
                        onChange={onChangeHandler}
                    />
                </div>
                <div>
                    
                    <div>
                        <button>Add item</button>
                        <button type="button" onClick={() => navigate('/items') }>Cancel</button> {' '}
                    </div>
                </div>
            </form>
        </div>
    );

}

export default NewItem;




