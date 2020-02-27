
const express = require('express');

const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// app.use(express.urlencoded({ extended: true }));   // do i really need this ???

require('./routes/items.routes')(app);

require('./config/mongoose.config');



app.listen(4500);