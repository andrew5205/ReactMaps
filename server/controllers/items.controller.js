const Items = require('../models/items.model');

// all logics 


module.exports = {

    create(req, res) {
        Items.create(req.body)
            .then(item => res.json(item))
            .catch(err => res.status(400).json(err))
    },

    getAll(_req, res) {
        Items.find()
            .then (items => res.json(items))
            .catch(err => res.json(err));
    },

    getOne(req, res) {
        Items.findById(req.params.id)
            .then(item => res.json(item))
            .catch(res.json);
    },

    delete(req, res) {
        Items.findByIdAndDelete(req.params.id)
            .then(() => res.json({ status: 'success'}))
            .catch(err => res.json(err));
    },

    update(req, res) {
        Items.findByIdAndUpdate(
            req.params.id,
            {   // the following is for validation
                // to make sure every field need to be provide while updating 
                name: req.body.name,
            },
            
            {
                runValidators: true,
                new: true
            }
        )
        .then(item => res.json(item))
        .catch(err => res.status(400).json(err));
    }
}


