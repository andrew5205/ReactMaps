import React, { useState } from 'react';

// import Todo from './Todo.js';

export default () => {
    // check list with items
    const [items, setItems] = useState([]);
    // tracker for the form input
    const [input, setInput] = useState('');


    // without event.preventDefult, whatever from the input will shows up in url
    // input some text 
    // http://localhost:3000/?text=some+text+ 
    function handleSubmit(event) {
        event.preventDefault();
        // console.log(input);

        setItems([
            ...items,
            {
                text: input,
                completed: false,
            }
        ]);

        // To claer the box after form submitted input 
        setInput('');
    }


    function toggleCompleted(index) {
        // to point out each item from items with index 
        const item = items[index];

        // once toggled, set item.completed to true from false 
        item.completed = !item.completed;

        setItems([
            ...items.slice(0,index),
                // check this w/ w/o {item}
            item,
            ...items.slice(index+1)
        ])
    }

    // function to handle delete by using .filter()
    // .filter() will return a new array 
    // keep the item if the index i is not equal 
    function handleDelete(index) {
        setItems(items.filter((_item, i) => i !== index));
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="text"
                    value={input}
                    onChange={ (event) => setInput(event.target.value) }
                />
                <button>Add</button>
            </form>
            {items.map((item, i) => (
                <div key={i}>
                    <span style={ {textDecoration: item.completed ? 'line-through' :'none'}
                }>{item.text}</span>
                    <input
                        type="checkbox"
                        checked={item.completed}
                        onChange={ () => toggleCompleted(i)}
                    />
                    <button onClick={() => handleDelete(i)}>Delete</button>
                </div>
            ))}
        </div>
    )
}



