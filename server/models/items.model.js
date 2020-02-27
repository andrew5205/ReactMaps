const mongoose = require('mongoose');

const ItemsSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,  //"validation must more then 3 characters"
        required: [
            true,
            "validation must more then 3 character"
        ]
    },
    address: {
        type: String,
        minlength: 3,  //"validation must more then 3 characters"
        required: [
            true,
            "validation must more then 3 character"
        ]
    },
    imageUrl: {
        type: String,
        required: [
            true,
            'Please provide a image !'
        ]
    },
}, {timestamps: true});

// register model/ schema 
const Items = mongoose.model('Items', ItemsSchema);

// make sure you exports 
module.exports = Items
