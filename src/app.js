const express = require('express');
const db = require('./database/index');
const routes = require('./routes');
const app = express();

db.hasConnection();
app.use(express.json());


app.use(routes);



app.listen(3000, () => console.log('listening on port 3000'));