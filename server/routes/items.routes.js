
const ItemsController = require('../controllers/items.controller');

module.exports = app => {

    // these are url
    app.post('/api/items', ItemsController.create);
    
    app.get('/api/items', ItemsController.getAll);
    
    // find single one by its id from url path 
    app.get('/api/items/:id', ItemsController.getOne);
    
    app.delete('/api/items/:id', ItemsController.delete);
    
    app.put('/api/items/:id', ItemsController.update);
}